import { useDisclosure } from "@mantine/hooks";
import { useSelector } from "react-redux";
import ModalCom from "./ModalCom";

function HistoryItem({ history }) {
  const theme = useSelector((state) => state.theme.mode);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ModalCom opened={opened} onClose={close} history={history}>
        <h1 className="text-xl">Transaction Details</h1>
      </ModalCom>

      <li
        onClick={open}
        className={`history-item ${theme} flex justify-between mt-5 p-3 rounded border-e-4`}
        style={{
          borderRightColor: history.isExpense ? "#FF8787" : "#69DB7C", // Dynamic border color
        }}
      >
        <span className="font-bold">{history.label}</span>
        <span
          className={`font-semibold text-[${
            history.isExpense ? "#FF8787" : "#69DB7C"
          }]`}
        >
          {history.isExpense ? "-" : "+"}
          {history.amount}$
        </span>
      </li>
    </>
  );
}

export default HistoryItem;
