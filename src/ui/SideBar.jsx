import { Link } from "react-router-dom";
import { IoStatsChartSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { IoHomeOutline } from "react-icons/io5";
import { FiPlusCircle } from "react-icons/fi";
import { LuDollarSign } from "react-icons/lu";
function SideBar() {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <ul className="flex flex-col px-4 pt-3  h-full">
      <li className={`list-item ${theme}  py-3 rounded px-3 text-lg`}>
        <Link to={"/"} className="flex items-center gap-3">
          <span>
            <IoHomeOutline color="#A5D8FF" />
          </span>
          Home
        </Link>
      </li>
      <li className={`list-item ${theme}  py-3 rounded px-3 text-lg`}>
        <Link to={"/expense"} className="flex items-center gap-3">
          <span>
            <FiPlusCircle color="#A5D8FF" />
          </span>
          Add Expense
        </Link>
      </li>
      <li className={`list-item ${theme}  py-3 rounded px-3 text-lg`}>
        <Link to={"/budget"} className="flex items-center gap-3">
          <LuDollarSign color="#A5D8FF" /> Add to Budget
        </Link>
      </li>
      <li className={`list-item ${theme}  py-3 rounded px-3 text-lg`}>
        <Link to={"/categories"} className="flex items-center gap-3">
          <span>
            <IoStatsChartSharp color="#A5D8FF" />
          </span>
          Categories
        </Link>
      </li>
    </ul>
  );
}

export default SideBar;
