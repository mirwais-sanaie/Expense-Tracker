function Expense() {
  return (
    <div className="flex flex-col space-y-4">
      <h1>Add an Expense</h1>
      <p>Adds on to your current expense amount.</p>
      <hr />
      <label htmlFor="">label</label>
      <input type="text" placeholder="desc..." />
      <label htmlFor="">amount</label>
      <input type="text" placeholder="amount..." />

      <hr />
      <h1>Add a Category to Your Expense</h1>
      <label htmlFor="">select</label>
      <select name="" id="" className="bg-stone-400">
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
        <option value="others">Others</option>
      </select>
    </div>
  );
}

export default Expense;
