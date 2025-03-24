import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";
import { MdOutlineLightMode } from "react-icons/md";
import { BsMoonStars } from "react-icons/bs";

function ThemeToggler() {
  const disptach = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  function handleToggle() {
    disptach(toggleTheme());
  }
  return (
    <span
      onClick={handleToggle}
      className={`border cursor-pointer rounded w-8 h-8 flex items-center justify-center `}
      style={{
        borderColor: theme === "dark" ? "#fcd34d" : "#228BE6",
      }}
    >
      {theme === "dark" ? (
        <MdOutlineLightMode color="#fcd34d" size={22} />
      ) : (
        <BsMoonStars color="#228BE6" size={22} />
      )}
    </span>
  );
}

export default ThemeToggler;
