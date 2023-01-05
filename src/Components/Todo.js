import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = (props) => {
     const [modalIsOpen, setModalIsOpen] = useState(false)

     const handleDelete = () => {
          setModalIsOpen(true)
     }

     const closeModalHandler = () => {
          setModalIsOpen(false)
     }
     const cancleHandler = () => {
          setModalIsOpen(false);
     }

     const confirmHandler = () => {
          setModalIsOpen(false)
     }
     return (
          <div>
               <h1>My Todos</h1>
               <div >
                    <h2>{props.text}</h2>
                    <div>
                         <button onClick={handleDelete}>Delete</button>
                    </div>
               </div>
               {modalIsOpen && <Modal onCancle={cancleHandler} onConfirm={confirmHandler} />}
               {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
          </div>


     )
}

export default Todo;