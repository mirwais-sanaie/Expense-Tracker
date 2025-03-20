import { BsCalculatorFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";

function Header() {
  return (
    <div className="flex justify-between py-4 px-4 bg-black-head-side border-b-[0.1px] border-b-[#2C2E33]">
      <h1 className="flex gap-2 items-center text-2xl">
        <span>
          <BsCalculatorFill />
        </span>
        Expense Tracker App
      </h1>
      <span className="border cursor-pointer rounded w-8 h-8 flex items-center justify-center border-amber-300">
        <MdOutlineLightMode color="#fcd34d" size={22} />
        {/* <BsMoonStars color="#fcd34d" size={22} /> */}
      </span>
    </div>
  );
}

export default Header;
