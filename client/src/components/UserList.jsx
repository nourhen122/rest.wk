import React from 'react'
import UserCard from './UserCard'

const UserList = ({users}) => {
  return (
    <div>
        {
            users.map(el=>
                <UserCard  key={el._id} user={el} />
                )
        }
    </div>
  )
}

export default UserList