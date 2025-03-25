import { useSelector } from "react-redux";
import HistoryItem from "./HistoryItem";

function HistoryCom() {
  const { histories } = useSelector((state) => state.history);
  return (
    <ul className="h-52 overflow-y-auto pe-3">
      {histories?.map((history) => (
        <HistoryItem key={history.id} history={history} />
      ))}
    </ul>
  );
}

export default HistoryCom;
