import { Input } from "@mantine/core";
import Button from "../../ui/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBudget, setIncomeSource, resetBudget } from "./budgetSlice";
import { useNavigate } from "react-router-dom";
import { randomId, useDisclosure } from "@mantine/hooks";
import { Button as ButtonMan } from "@mantine/core";
import ModalCom from "../../ui/ModalCom";
import { addHistory } from "../history/historySlice";

function Budget() {
  const [budgetState, setBudgetState] = useState("");
  const [sourceAmount, setSourceAmount] = useState("");
  const [sourceLabel, setSourceLabel] = useState("");
  const { budget } = useSelector((state) => state.budget);
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useSelector((state) => state.theme.mode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputStyleDark = {
    input: {
      backgroundColor: "#25262B",
      color: "white",
      border: "1px solid #333",
    },
  };
  const inputStyleLight = {
    input: {
      backgroundColor: "#fff",
      color: "#495057",
      border: "1px solid #ced4da",
      fontWeight: "500",
    },
  };
  function handleSetBudget() {
    if (!budgetState) return;
    const date = new Date().getDate();
    const id = randomId();
    const newBudget = {
      amount: +budgetState,
      label: `Budget has been set to : `,
      date: date,
      id: id,
    };
    dispatch(setBudget(+budgetState));
    dispatch(addHistory(newBudget));
    navigate("/");
  }

  function handleSetIncomeSource() {
    if (!sourceAmount || !sourceLabel) return;
    const date = new Date().getDate();
    const id = randomId();

    const newIncome = {
      label: sourceLabel,
      amount: +sourceAmount,
      date: date,
      id: id,
    };
    dispatch(setIncomeSource(newIncome));
    dispatch(addHistory(newIncome));

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

  const colorStyle = theme === "dark" ? "text-gray-300" : "text-[#212529]";
  const borderStyle =
    theme === "dark"
      ? "w-full h-[0.1px] bg-[#2C2E33]"
      : "w-full h-[0.1px] bg-[#CED4DA]";

  return (
    <div className="p-8 lg:p-15">
      <div className="space-y-5 pb-4">
        <div>
          <h1 className="font-bold text-xl">Set Your Income / Budget</h1>
          <p className="text-xs">
            Sets your income / budget to the entered value.
          </p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className={colorStyle}>
            Enter your budget <span className="text-red-600">*</span>
          </label>
          <Input
            type="text"
            placeholder="Ex : 5000"
            radius={"sm"}
            value={budgetState}
            onChange={(e) => setBudgetState(e.target.value)}
            styles={theme === "dark" ? inputStyleDark : inputStyleLight}
            className="w-full md:w-2/3 lg:w-[36%]"
          />
        </div>
        <div>
          <Button onClick={handleSetBudget}>Set budget</Button>
        </div>
      </div>

      <div className={borderStyle}></div>

      <div className="space-y-4 py-6">
        <div>
          <h1 className="font-bold text-xl">Add an Income Source</h1>
          <p className="text-xs">
            Adds on to your current income / budget amount.
          </p>
        </div>

        <div>
          <label htmlFor="" className={colorStyle}>
            Label <span className="text-red-600">*</span>
          </label>
          <Input
            type="text"
            placeholder="Ex : Christmas bouns"
            radius={"sm"}
            styles={theme === "dark" ? inputStyleDark : inputStyleLight}
            className="w-full md:w-2/3 lg:w-[36%]"
            value={sourceLabel}
            onChange={(e) => setSourceLabel(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="" className={colorStyle}>
            Amount <span className="text-red-600">*</span>
          </label>
          <Input
            type="text"
            placeholder="Ex : 3000"
            radius={"sm"}
            styles={theme === "dark" ? inputStyleDark : inputStyleLight}
            className="w-full md:w-2/3 lg:w-[36%]"
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

      <div className={borderStyle}></div>

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
