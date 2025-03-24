import { Modal } from "@mantine/core";
import Button from "./Button";

function ModalCom({ opened, onClose, handleReset, children, history }) {
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
          <Button color={"red"}>Delete item</Button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalCom;
