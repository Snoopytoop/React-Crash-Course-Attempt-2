import "./Modal.css";

function Modal({ question }) {
  function message(m) {
    console.log(m);
  }
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{question}</p>
        <div className="modal__buttons">
          <button onClick={() => message("cancel")} className="btn btn__cancel">
            Cancel
          </button>
          <button onClick={() => message("confirm")} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;
