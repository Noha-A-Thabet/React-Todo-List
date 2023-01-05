const Modal = (props) => {
     return (
          <div>
               <p>Are You Sure</p>
               <button onClick={props.onCancle}>Cancle</button>
               <button onClick={props.onConfirm}>Confirm</button>
          </div>
     )
}
export default Modal;