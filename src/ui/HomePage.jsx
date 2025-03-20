function HomePage() {
  return (
    <div className="p-15">
      <h1 className="font-bold text-4xl">YOUR BALANCE IS: $x</h1>

      <div className="flex gap-3  mt-10">
        <div className="w-1/2 h-50 bg-[#25262B] p-12 flex text-center flex-col gap-y-4">
          <h2 className="text-white font-bold text-3xl">Income / Budget</h2>
          <span className="text-[#69DB7C] text-3xl font-bold">$7,000</span>
        </div>
        <div className="w-1/2 h-50 bg-[#25262B] p-12 flex text-center flex-col gap-y-4">
          <h2 className="text-white font-bold text-3xl">Expenses</h2>
          <span className="text-[#FF8787] text-3xl font-bold">$2,003,000</span>
        </div>
      </div>

      <div className="mt-15">
        <h1 className="font-bold">Transaction History</h1>
        <div className="w-full h-[0.1px] bg-[#2C2E33]"></div>

        <div className="w-1/2">
          <ul className="">
            <li className="flex justify-between mt-5 bg-[#25262B] p-3 rounded border-e-4 border-e-[#FF8787]">
              <span className="font-bold">car</span>
              <span className="font-semibold text-[#FF8787]">-3000$</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
