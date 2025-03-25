import { Modal } from "@mantine/core";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../features/expense/expenseSlice";
import { deleteBudget } from "../features/budget/budgetSlice";
import { deleteHistory } from "../features/history/historySlice";

function ModalCom({ opened, onClose, handleReset, children, history }) {
  const dispatch = useDispatch();

  function handleDelete(id) {
    if (history.isExpense) {
      dispatch(deleteExpense(id));
    } else {
      dispatch(deleteBudget(id));
    }
    dispatch(deleteHistory(id));
  }

  if (handleReset) {
    return (
      <Modal opened={opened} onClose={onClose} centered title={children}>
        <div className="space-x-2">
          <Button onClick={handleReset} color={"red"}>
            Reset
          </Button>
          <Button onClick={onClose} color={"blue"}>
            Cancel
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal opened={opened} onClose={onClose} title={children}>
      <div>
        <div className="space-y-0.5 mb-3">
          <p>
            <span className="font-bold">Label:</span> {history.label}
          </p>

          <p>
            <span className="font-bold">Amount:</span> ${history.amount}
          </p>
          <p>
            <span className="font-bold">Category:</span> {history.category}
          </p>
          <p>
            <span className="font-bold">Date Created :</span> {history.date}
          </p>
          <p>
            <span className="font-bold">ID:</span> {history.id}
          </p>
        </div>
        <div className="space-x-2">
          <Button onClick={onClose} color={"blue"}>
            Exit
          </Button>
          <Button onClick={() => handleDelete(history.id)} color={"red"}>
            Delete item
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalCom;
