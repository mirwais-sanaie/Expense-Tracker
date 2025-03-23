import { useSelector } from "react-redux";
import HistoryCom from "./historyCom";

function HomePage() {
  const { budget } = useSelector((state) => state.budget);
  const { expenseAmount } = useSelector((state) => state.expense);
  const { histories } = useSelector((state) => state.history);
  return (
    <div className="p-15">
      <h1 className="font-bold text-4xl">
        YOUR BALANCE IS: ${budget - expenseAmount}
      </h1>

      <div className="flex gap-3  mt-10">
        <div className="w-1/2 h-50 bg-[#25262B] p-12 flex text-center flex-col gap-y-4">
          <h2 className="text-white font-bold text-3xl">Income / Budget</h2>
          <span className="text-[#69DB7C] text-3xl font-bold">${budget}</span>
        </div>
        <div className="w-1/2 h-50 bg-[#25262B] p-12 flex text-center flex-col gap-y-4">
          <h2 className="text-white font-bold text-3xl">Expenses</h2>
          <span className="text-[#FF8787] text-3xl font-bold">
            ${expenseAmount}
          </span>
        </div>
      </div>

      <div className="mt-15">
        <h1 className="font-bold mb-2">Transaction History</h1>
        <div className="w-full h-[0.1px] bg-[#2C2E33] mb-2"></div>

        <div className="w-1/2">
          {!histories.length > 0 ? (
            <p>You dont have any payment before...</p>
          ) : (
            <HistoryCom />
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
