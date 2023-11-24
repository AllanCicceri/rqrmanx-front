import UserList from './UserList'
import UserForm from './UserForm'
import { useState } from 'react'

function UserManager() {
    const [users, setUsers] = useState([])
    const [editUser, setEditUser] = useState(null)


    return (
        <div className="w-screen h-screen flex ">
            <UserList users={users} setUsers={setUsers} setEditUser={setEditUser}/>
            <UserForm setUsers={setUsers} editUser={editUser} setEditUser={setEditUser}/> 
        </div>
    )
}

export default UserManager;