import { useSelector } from "react-redux";

function Categories() {
  const { budget } = useSelector((state) => state.budget);
  const { expenses } = useSelector((state) => state.expense);
  return (
    <div className="p-15">
      <h1 className="font-bold text-4xl">Spending Categories</h1>
      <div className="grid grid-cols-4 gap-2 pt-12">
        <div className="h-30 bg-[#25262B] flex flex-col items-center justify-center">
          <h1 className="font-bold text-2xl">Budget</h1>
          <span className="font-semibold text-2xl mt-4">{budget}</span>
        </div>

        {expenses.map((expense) => (
          <div
            key={expense.label}
            className="h-30 bg-[#25262B] flex flex-col items-center justify-center"
          >
            <h1 className="font-bold text-2xl">{expense.category}</h1>
            <span className="font-semibold text-2xl mt-4">
              {expense.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
