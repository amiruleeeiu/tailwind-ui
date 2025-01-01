import { useBoolean } from "@/hooks/useBoolean";
import Button from "./Button";
import Modal, { ModalBody } from "./Modal/Modal";

function SmallModal() {
  const { value, setTrue, setFalse } = useBoolean();
  return (
    <div>
      <Button onClick={setTrue}>Xs</Button>
      <Modal size={"xs"} outsideClick={true} onClose={setFalse} isOpen={value}>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          atque placeat iste mollitia a excepturi labore in aperiam magnam.
          Nobis quas illum architecto quam at totam rerum, aliquid molestias,
        </ModalBody>
      </Modal>
    </div>
  );
}

export default SmallModal;
