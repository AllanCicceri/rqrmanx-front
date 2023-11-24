import { useEffect, useState } from "react";
import { GetAllUsers } from "../../api/UsersEndPoint";
import UserItem from "./UserItem";

function UserList({users, setUsers, setEditUser}){
    
    useEffect(() => {
        GetAllUsers().then(updatedUsers => {
            if (!areArraysEqual(users, updatedUsers)) {
                setUsers(updatedUsers);
            }
        });
    }, [users]);

    const areArraysEqual = (array1, array2) => {
        return JSON.stringify(array1) === JSON.stringify(array2);
    };

    
    return(
        <div className="w-1/2 bg-azul flex flex-col items-center justify-center">
            <h2 className="text-4xl mb-2 text-white">Users List</h2>
            <div className="w-3/4 h-3/4 p-4 bg-branco rounded-lg shadow-lg">
                {users.map(user => (
                    <UserItem key={user.id} user={user} setUsers={setUsers} setEditUser={setEditUser}/>
                ))}

            </div>

        </div>
    )
}

export default UserList;