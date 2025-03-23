import { Modal } from "@mantine/core";
import Button from "./Button";

function ModalCom({ opened, onClose, handleReset, children }) {
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

export default ModalCom;
