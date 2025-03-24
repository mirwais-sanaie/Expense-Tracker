import { useState } from "react";
import Button from "../../ui/Button";
import ModalCom from "../../ui/ModalCom";
import { useDispatch, useSelector } from "react-redux";
import { create, resetExpense } from "./expenseSlice";
import { Input, InputBase } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Button as ButtonMan } from "@mantine/core";

import { useNavigate } from "react-router-dom";
import { addHistory } from "../history/historySlice";

function Expense() {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Groceries");
  const navigate = useNavigate();
  const { expenseAmount } = useSelector((state) => state.expense);

  const [opened, { open, close }] = useDisclosure(false);

  const disptach = useDispatch();

  function createExpense() {
    if (!label || !amount || !category) return;
    const date = new Date().getDate();
    const id = crypto.randomUUID();
    const expense = {
      label,
      amount: +amount,
      category,
      date,
      id,
      isExpense: true,
    };

    disptach(create(expense));
    disptach(addHistory(expense));
    setLabel("");
    setAmount("");
    setCategory("");
    navigate("/");
  }

  const inputStyles = {
    input: {
      backgroundColor: "#25262B",
      color: "white",
      border: "1px solid #333",
      width: "36%",
    },
  };

  function handleReset() {
    if (!expenseAmount) {
      alert("You dont have any expense");
      return;
    }
    disptach(resetExpense());
    navigate("/");
  }

  return (
    <div className="flex-col p-15 space-y-4">
      <div>
        <h1 className="font-bold text-xl">Add an Expense</h1>
        <p className="text-[13px]">Adds on to your current expense amount.</p>
      </div>

      <div>
        <label htmlFor="" className="text-gray-300">
          Label <span className="text-red-600">*</span>
        </label>
        <Input
          value={label}
          type="text"
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Ex : Car"
          radius={"sm"}
          styles={inputStyles}
          className="cursor-pointer "
        />
      </div>
      <div>
        <label htmlFor="" className="text-gray-300">
          Amount <span className="text-red-600">*</span>
        </label>
        <Input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          styles={inputStyles}
          placeholder="Ex : 3000"
        />
      </div>

      <div className="w-full h-[0.1px] bg-[#2C2E33]"></div>

      <div className="space-y-1">
        <h1 className="font-bold text-xl">Add a Category to Your Expense</h1>

        <InputBase
          label="Select a Category"
          component="select"
          mt="md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name=""
          id=""
          styles={inputStyles}
        >
          <option selected value="Groceries">
            Groceries
          </option>
          <option value="Entertainment">Entertainment</option>
          <option value="Uncategorized">Uncategorized</option>
        </InputBase>

        <div className="flex gap-x-4 mt-4">
          <Button onClick={createExpense}>Add</Button>
          <Button color={"red"}>Remove category</Button>
        </div>
      </div>

      <div className="w-full h-[0.1px] bg-[#2C2E33]"></div>

      <div className="space-y-4">
        <div>
          <h1 className="font-bold text-xl">Reset Your Expenses</h1>
          <p className="text-[13px]"> Resets your expenses back to 0</p>
        </div>

        <ModalCom handleReset={handleReset} opened={opened} onClose={close}>
          <h1 className="font-bold mb-2">
            Are you sure you want to reset your expenses to 0?
          </h1>
          <p className="text-[13px]">
            This action can be later undone by deleting the transaction. However
            the expense categories will return and the amount will be put under
            Uncategorized
          </p>
        </ModalCom>
        <ButtonMan
          style={{
            backgroundColor: "#FA5252",
            color: "white",
            borderColor: "#FA5252",
          }}
          variant="default"
          onClick={open}
          color={"red"}
        >
          Reset
        </ButtonMan>
      </div>
    </div>
  );
}

export default Expense;
