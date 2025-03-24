import { BsCalculatorFill } from "react-icons/bs";
import ThemeToggler from "./ThemeToggler";
import { useSelector } from "react-redux";

function Header() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`header flex justify-between py-4 px-4 ${theme} border-b-[0.1px] border-b-[#2C2E33]`}
    >
      <h1 className="flex gap-2 items-center text-2xl">
        <span>
          <BsCalculatorFill />
        </span>
        Expense Tracker App
      </h1>
      <ThemeToggler />
    </div>
  );
}

export default Header;
