import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { create } from "./expenseSlice";
import { Input, InputBase } from "@mantine/core";
import { FaChevronDown as IconChevronDown } from "react-icons/fa";

function Expense() {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const disptach = useDispatch();

  function createExpense() {
    const expense = {
      label,
      amount,
      category,
    };

    disptach(create(expense));
  }

  const inputStyles = {
    input: {
      backgroundColor: "#25262B",
      color: "white",
      border: "1px solid #333",
      width: "36%",
    },
  };
  // const chevron = <IconChevronDown size={16} stroke={1.5} />;

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
          <option value="food">Food</option>
          <option value="clothing">Clothing</option>
          <option value="transport">Transport</option>
          <option value="entertainment">Entertainment</option>
          <option value="others">Others</option>
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
        <Button color={"red"}>Reset</Button>
      </div>
    </div>
  );
}

export default Expense;
