import { Input } from "@mantine/core";

import Button from "../../ui/Button";

function Budget() {
  const inputStyles = {
    input: {
      backgroundColor: "#25262B",
      color: "white",
      border: "1px solid #333",
      width: "36%",
    },
  };

  return (
    <div className="p-15">
      <div className="space-y-5 pb-4">
        <div>
          <h1 className="font-bold text-xl">Set Your Income / Budget</h1>
          <p className="text-xs">
            Sets your income / budget to the entered value.
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-gray-300">
            Enter your budget <span className="text-red-600">*</span>
          </label>
          <Input
            type="text"
            placeholder="Ex : 5000"
            radius={"sm"}
            styles={inputStyles}
            className="cursor-pointer "
          />
        </div>
        <div>
          <Button>Set budget</Button>
        </div>
      </div>

      <div className="w-full h-[0.1px] bg-[#2C2E33]"></div>

      <div className="space-y-4 py-6">
        <div>
          <h1 className="font-bold text-xl">Add an Income Source</h1>
          <p className="text-xs">
            Adds on to your current income / budget amount.
          </p>
        </div>

        <div>
          <label htmlFor="" className="text-gray-300">
            Label <span className="text-red-600">*</span>
          </label>
          <Input
            type="text"
            placeholder="Ex : Christmas bouns"
            radius={"sm"}
            styles={inputStyles}
            className="cursor-pointer "
          />
        </div>
        <div>
          <label htmlFor="" className="text-gray-300">
            Amount <span className="text-red-600">*</span>
          </label>
          <Input
            type="text"
            placeholder="Ex : 3000"
            radius={"sm"}
            styles={inputStyles}
            className="cursor-pointer "
          />
        </div>

        <div>
          <Button color={"blue"}>Add to budget</Button>
        </div>
      </div>

      <div className="w-full h-[0.1px] bg-[#2C2E33]"></div>

      <div className="space-y-4 pt-4">
        <div>
          <h1 className="font-bold text-xl">Reset Your Expenses</h1>
          <p className="text-[13px]"> Resets your expenses back to 0</p>
        </div>
        <Button color={"red"}>Reset</Button>
      </div>
    </div>
  );
}

export default Budget;
