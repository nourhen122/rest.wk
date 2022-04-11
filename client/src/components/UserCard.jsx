import React from 'react'
import { useDispatch } from 'react-redux'
import { addUsers, delUsers, getUsers } from '../redux/actions'
import AddUser from './AddUser'
import EditUser from './EditUser'

const UserCard = ({user}) => {
    const dispatch = useDispatch()
    const handleDelete=(id)=>{
        dispatch(delUsers(id))
        dispatch(getUsers())
    }

    
    
  return (
    <div>
    <h2>
        {user.name}
    </h2>
    <h3>
        {user.email}
    </h3>
    <button  onClick={()=>handleDelete(user._id)} >Delete</button>
    <EditUser user={user} />

    </div>
  )
}

export default UserCard