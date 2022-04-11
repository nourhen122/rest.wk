import axios from "axios"
import { ADD_USERS, DELETE_USERS, EDIT, GET_USERS } from "./actionTypes"


export const getUsers = () => async(dispatch) => {
    try {
        const res = await axios.get('/get')
        console.log(res)
        dispatch({
            type:GET_USERS,
            payload:res.data
        })
    } catch (error) {
        alert('get error')
    }
}
export const delUsers = (id) => async(dispatch) => {
    try {
        const res = await axios.delete(`/del/${id}`)
        dispatch({
            type:DELETE_USERS,
            payload:res.data
        })
        
    } catch (error) {
        alert('error')
        
    }
}
export const addUsers = (newUser) => async(dispatch) => {
    try {
        const res = await axios.post('/add',newUser)
        console.log(res)
        dispatch({
            type:ADD_USERS,
            payload:res.data
        })
        
    } catch (error) {
        alert('error')
        
    }
}

export const editUser = (editedUser) => async(dispatch) => {
    try {
        const res = await axios.put(`/edit/${editedUser.id}`,editedUser)
        console.log(res)
        dispatch({
            type:EDIT,
            payload:res.data
        })
        
    } catch (error) {
        alert('error')
        
    }
}


