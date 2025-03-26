import { useSelector } from "react-redux";

function Categories() {
  const { budget } = useSelector((state) => state.budget);
  const { expenses } = useSelector((state) => state.expense);
  const theme = useSelector((state) => state.theme.mode);

  const categoryTotals = expenses?.reduce((acc, expense) => {
    const { category, amount } = expense;

    if (acc[category]) {
      acc[category] += amount;
    } else {
      acc[category] = amount;
    }

    return acc;
  }, {});

  const result = Object.keys(categoryTotals || {}).map((category) => ({
    category,
    totalAmount: categoryTotals[category],
  }));

  console.log(result);
  return (
    <div className="p-8 lg:p-15">
      <h1 className="font-bold text-4xl">Spending Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-12">
        <div
          className={`category-item ${theme} h-30  flex flex-col items-center justify-center`}
        >
          <h1 className="font-bold text-2xl">Budget</h1>
          <span className="font-semibold text-2xl mt-4">${budget}</span>
        </div>

        {result.map((item) => (
          <div
            key={item.category}
            className={`category-item ${theme} h-30  flex flex-col items-center justify-center`}
          >
            <h1 className="font-bold text-2xl">{item.category}</h1>
            <span className="font-semibold text-2xl mt-4">
              ${item.totalAmount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
