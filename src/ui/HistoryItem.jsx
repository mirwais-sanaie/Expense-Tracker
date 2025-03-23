function HistoryItem({ history }) {
  return (
    <li
      className={`flex justify-between mt-5 bg-[#25262B] p-3 rounded border-e-4`}
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
