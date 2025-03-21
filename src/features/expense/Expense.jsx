import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { create, resetExpense } from "./expenseSlice";
import { Input, InputBase } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Expense() {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const disptach = useDispatch();

  function createExpense() {
    const expense = {
      label,
      amount: +amount,
      category,
    };

    disptach(create(expense));
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
          <option value="food">Groceries</option>
          <option value="clothing">Entertainment</option>
          <option value="transport">Uncategorized</option>
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
        <Button onClick={handleReset} color={"red"}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Expense;
