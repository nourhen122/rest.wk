import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUsers, getUsers } from '../redux/actions'

const AddUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState()
    const dispatch = useDispatch()
 const handleSubmit = (e) => {
const newUser = {
    name,
    email,
    age
}
dispatch(addUsers(newUser))
// dispatch(getUsers())
 }

  return (
    <div>
        <form onSubmit={handleSubmit}  >
        <h3>name</h3>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <h3>email</h3>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <h3>age</h3>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
            <button  type='submit' >Add</button>
        </form>
    </div>
  )
}

export default AddUser