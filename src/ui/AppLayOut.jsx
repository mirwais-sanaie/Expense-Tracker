import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayOut() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1">
        <div className="w-1/4">
          <SideBar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayOut;
