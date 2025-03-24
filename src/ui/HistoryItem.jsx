import { useSelector } from "react-redux";

function HistoryItem({ history }) {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <li
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
  );
}

export default HistoryItem;
