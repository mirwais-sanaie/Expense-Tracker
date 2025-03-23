import { Input } from "@mantine/core";
import Button from "../../ui/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBudget, setIncomeSource, resetBudget } from "./budgetSlice";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Button as ButtonMan } from "@mantine/core";
import ModalCom from "../../ui/ModalCom";

function Budget() {
  const [budgetState, setBudgetState] = useState("");
  const [sourceAmount, setSourceAmount] = useState("");
  const [sourceLabel, setSourceLabel] = useState("");
  const { budget } = useSelector((state) => state.budget);
  const [opened, { open, close }] = useDisclosure(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputStyles = {
    input: {
      backgroundColor: "#25262B",
      color: "white",
      border: "1px solid #333",
      width: "36%",
    },
  };

  function handleSetBudget() {
    if (!budgetState) return;
    dispatch(setBudget(+budgetState));
    navigate("/");
  }
  function handleSetIncomeSource() {
    if (!budgetState || !sourceAmount || !sourceLabel) return;
    const newIncome = {
      label: sourceLabel,
      amount: +sourceAmount,
    };
    dispatch(setIncomeSource(newIncome));
    navigate("/");
  }
  function handleReset() {
    if (!budget) {
      alert("You dont have any budget.");
      return;
    }
    dispatch(resetBudget());
    navigate("/");
  }

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
            value={budgetState}
            onChange={(e) => setBudgetState(e.target.value)}
            styles={inputStyles}
            className="cursor-pointer "
          />
        </div>
        <div>
          <Button onClick={handleSetBudget}>Set budget</Button>
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
            value={sourceLabel}
            onChange={(e) => setSourceLabel(e.target.value)}
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
            value={sourceAmount}
            onChange={(e) => setSourceAmount(e.target.value)}
          />
        </div>

        <div>
          <Button onClick={handleSetIncomeSource} color={"blue"}>
            Add to budget
          </Button>
        </div>
      </div>

      <div className="w-full h-[0.1px] bg-[#2C2E33]"></div>

      <div className="space-y-4">
        <div>
          <h1 className="font-bold text-xl">Reset Your Expenses</h1>
          <p className="text-[13px]"> Resets your expenses back to 0</p>
        </div>

        <ModalCom handleReset={handleReset} opened={opened} onClose={close}>
          <h1 className="font-bold mb-2 me-3">
            Are you sure you want to reset your budget to 0?
          </h1>
          <p className="text-[13px]">
            This action can be later undone by deleting the transaction.
          </p>
        </ModalCom>
        <ButtonMan
          style={{
            backgroundColor: "#FA5252",
            color: "white",
            borderColor: "#FA5252",
          }}
          variant="default"
          onClick={open}
          color={"red"}
        >
          Reset
        </ButtonMan>
      </div>
    </div>
  );
}

export default Budget;
