import Button from "../../ui/Button";

function Budget() {
  return (
    <div className="">
      <h1 className="bg-slate-400">Set Your Income / Budget</h1>
      <p>Sets your income / budget to the entered value.</p>

      <label htmlFor="">Enter your budget *</label>
      <input type="text" placeholder="Enter budget" className="border" />
      <Button>Set budget</Button>

      <hr />

      <h1>Add an Income Source</h1>
      <div>
        <label htmlFor="">Label</label>
        <input type="text" placeholder="label" className="border" />
      </div>
      <div>
        <label htmlFor="">amount</label>
        <input type="text" placeholder="amount" className="border" />
      </div>

      <Button>Add to budget</Button>

      <hr />

      <h1>Reset Your Expenses</h1>
      <p> Resets your expenses back to 0</p>

      <Button>Reset</Button>
    </div>
  );
}

export default Budget;
