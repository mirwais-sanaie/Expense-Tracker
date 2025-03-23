import { useSelector } from "react-redux";
import HistoryItem from "./HistoryItem";

function HistoryCom() {
  const { histories } = useSelector((state) => state.history);
  console.log(histories);
  return (
    <ul className="h-82 overflow-y-auto pe-3">
      {histories?.map((history) => (
        <HistoryItem key={history.id} history={history} />
      ))}
    </ul>
  );
}

export default HistoryCom;
