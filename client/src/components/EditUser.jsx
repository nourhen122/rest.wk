import React from 'react'
import Modal from 'react-modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser, getUsers } from '../redux/actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const EditUser = ({user}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [age, setAge] = useState(user.age)
    const dispatch = useDispatch()

    function openModal() {
      setIsOpen(true);
    }

  
    function closeModal() {
      setIsOpen(false);
    }

    const handleSubmit =( e)=>{
        e.preventDefault();
        const editedUser = {
            id:user._id,
            name,
            email,
            age
        }
        dispatch(editUser(editedUser))
        closeModal()
        dispatch(getUsers())
    }
  return (
    <div>
         <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        
        style={customStyles}
   
      >
          <form onSubmit={handleSubmit} action="">
              <label htmlFor="">Name</label>
              <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} />
              <label htmlFor="">Email</label>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
              <label htmlFor="">Age</label>
              <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
            <button  type='submit' >Edit</button>
          </form>
      </Modal>
    </div>
  )
}

export default EditUser