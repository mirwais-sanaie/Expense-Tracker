import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

function SideBar() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <ul className="flex flex-col px-4 pt-3  h-full border-r-[0.1px] border-r-[#2C2E33]">
      <li className={`list-item ${theme}  py-3 rounded px-3 text-lg`}>
        <Link to={"/"} className="flex items-center gap-3">
          <span>
            <MdHome />
          </span>
          Home
        </Link>
      </li>
      <li className={`list-item ${theme}  py-3 rounded px-3 text-lg`}>
        <Link to={"/expense"} className="flex items-center gap-3">
          <span>
            <FaPlusCircle />
          </span>
          Add Expense
        </Link>
      </li>
      <li className={`list-item ${theme}  py-3 rounded px-3 text-lg`}>
        <Link to={"/budget"} className="flex items-center gap-3">
          <FaDollarSign /> Add to Budget
        </Link>
      </li>
      <li className={`list-item ${theme}  py-3 rounded px-3 text-lg`}>
        <Link to={"/categories"} className="flex items-center gap-3">
          <span>
            <IoStatsChartSharp />
          </span>
          Categories
        </Link>
      </li>
    </ul>
  );
}

export default SideBar;
