import './Modal.css'

const Modal = (props) => {
    const closeModal = async () => {
        props.setModalData(null);
    }

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={element => element.stopPropagation()}>
                <h1>Hi I'm a Modal</h1>
            </div>
        </div>
    )
}

export default Modal