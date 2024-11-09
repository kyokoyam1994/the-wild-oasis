import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  {
    /*<Modal>
      <Modal.Toggle opens="new-cabin">
        <Button>Add new cabin</Button>
      </Modal.Toggle>
      <Modal.Window name="new-cabin">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>*/
  }

  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddCabin;
