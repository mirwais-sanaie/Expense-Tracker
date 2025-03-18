import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";

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

    disptach({create(expense)});
  }

  return (
    <div className="flex-col space-y-4 inline-block">
      <h1>Add an Expense</h1>
      <p>Adds on to your current expense amount.</p>
      <hr />
      <div>
        <label htmlFor="">label</label>
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="desc..."
          className="border border-black"
        />
      </div>
      <div>
        <label htmlFor="">amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="amount..."
          className="border
        "
        />
      </div>
      <hr />
      <h1>Add a Category to Your Expense</h1>
      <label htmlFor="">select</label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        name=""
        id=""
        className="bg-stone-400"
      >
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
        <option value="others">Others</option>
      </select>
      <div className="flex gap-x-4">
        <Button>Add</Button>
        <Button>Remove category</Button>
      </div>
      S
      <hr />
      <h1>Reset Your Expenses</h1>
      <p> Resets your expenses back to 0</p>
      <Button>Reset</Button>
    </div>
  );
}

export default Expense;
