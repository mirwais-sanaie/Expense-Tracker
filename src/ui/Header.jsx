import { BsCalculatorFill } from "react-icons/bs";
import ThemeToggler from "./ThemeToggler";
import { useSelector } from "react-redux";
import { Burger } from "@mantine/core";

function Header({ toggle, opened }) {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div
      className={`header flex justify-between items-center py-4 px-4 ${theme} border-b-[0.1px] fixed top-0 left-0 w-full z-50`}
    >
      <div>
        <h1 className="flex gap-2 items-center md:text-2xl">
          <span>
            <BsCalculatorFill />
          </span>
          Expense Tracker App
        </h1>
      </div>
      <div className="flex space-x-5">
        <ThemeToggler />

        <Burger
          className="lg:hidden"
          color={theme === "dark" ? "#fff" : "#000"}
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
        />
      </div>
    </div>
  );
}

export default Header;
