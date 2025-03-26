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
  const theme = useSelector((state) => state.theme.mode);

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

  const inputStyleDark = {
    input: {
      backgroundColor: "#25262B",
      color: "white",
      border: "1px solid #333",
    },
  };
  const inputStyleLight = {
    input: {
      backgroundColor: "#fff",
      color: "#495057",
      border: "1px solid #ced4da",
      fontWeight: "500",
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

  const colorStyle = theme === "dark" ? "text-gray-300" : "text-[#212529]";
  const borderStyle =
    theme === "dark"
      ? "w-full h-[0.1px] bg-[#2C2E33]"
      : "w-full h-[0.1px] bg-[#CED4DA]";

  return (
    <div className="flex-col p-8 lg:p-15 space-y-4">
      <div>
        <h1 className="font-bold text-xl">Add an Expense</h1>
        <p className="text-[13px]">Adds on to your current expense amount.</p>
      </div>

      <div>
        <label htmlFor="" className={colorStyle}>
          Label <span className="text-red-600">*</span>
        </label>
        <Input
          value={label}
          type="text"
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Ex : Car"
          radius={"sm"}
          styles={theme === "dark" ? inputStyleDark : inputStyleLight}
          className="w-full md:w-2/3 lg:w-[36%]"
        />
      </div>
      <div>
        <label htmlFor="" className={colorStyle}>
          Amount <span className="text-red-600">*</span>
        </label>
        <Input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          styles={theme === "dark" ? inputStyleDark : inputStyleLight}
          placeholder="Ex : 3000"
          className="w-full md:w-2/3 lg:w-[36%]"
        />
      </div>

      <div className={borderStyle}></div>

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
          styles={theme === "dark" ? inputStyleDark : inputStyleLight}
          className="w-full md:w-2/3 lg:w-[36%]"
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

      <div className={borderStyle}></div>

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
