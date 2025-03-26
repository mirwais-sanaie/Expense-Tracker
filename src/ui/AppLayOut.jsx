import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import "./AppLayOut.css";
import { useSelector } from "react-redux";
import { useDisclosure } from "@mantine/hooks";

function AppLayOut() {
  const theme = useSelector((state) => state.theme.mode);
  const [opened, { toggle }] = useDisclosure();

  return (
    <div className={`app h-screen relative`}>
      <Header opened={opened} toggle={toggle} />

      <div className="md:flex md:flex-1 mt-15">
        <div
          className={`sidebar ${theme} ${
            !opened && "hidden"
          } lg:block  lg:w-1/4 border-r-[0.1px] border-r-[#2C2E33]`}
        >
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
