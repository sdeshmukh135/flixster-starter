import './Modal.css'

const Modal = (props) => {
    return (
        <div className="modal-overlay" onClick={props.setBooleans(prev => ({...prev, isModal:false}))}>
            <div className="modal-content">
                <h1>Hi I'm a Modal</h1>
            </div>
        </div>
    )
}

export default Modal