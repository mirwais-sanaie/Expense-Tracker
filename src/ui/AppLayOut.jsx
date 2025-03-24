import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import "./AppLayOut.css";
import { useSelector } from "react-redux";

function AppLayOut() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={`app flex flex-col h-screen`}>
      <Header />

      <div className="flex flex-1 ">
        <div className={`sidebar w-1/4 ${theme}`}>
          <SideBar />
        </div>
        <div className={`outlet flex-1 ${theme}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayOut;
