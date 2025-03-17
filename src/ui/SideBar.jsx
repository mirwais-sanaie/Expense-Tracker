import { Link } from "react-router-dom";

function SideBar() {
  return (
    <ul className="flex flex-col space-y-4 px-4 pt-3 bg-slate-600 h-full text-white">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/expense"}>Add Expense</Link>
      </li>
      <li>
        <Link to={"/budget"}>Add to Budget</Link>
      </li>
      <li>
        <Link to={"/categories"}>Categories</Link>
      </li>
    </ul>
  );
}

export default SideBar;
