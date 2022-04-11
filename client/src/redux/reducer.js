const { GET_USERS, DELETE_USERS, ADD_USERS, EDIT } = require("./actionTypes");


const init = {
    loading:true,
    users:null,
    message:null
}

const reducer = (state=init,{type,payload}) =>{
    switch (type) {
        case GET_USERS:
            return {
                ...state,loading:false,users:payload
            }
           
        case DELETE_USERS :
            return {
                ...state,loading:false
            } 
        case ADD_USERS :
            return {
                ...state,loading:false,message:payload
            }
        case EDIT: 
        return {
            ...state,loading:false
        }      
        default:
          return state
    }
}

export default reducer