import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { DeleteUser } from "../../api/UsersEndPoint";
import { useState } from "react";



function UserItem({user, setUsers, setEditUser}){
    async function HandleDeleteClick(){
        const result = await DeleteUser(user.id)
        
        if(result){
            alert("Usuário Removido!")
            setUsers([])
        }
        
    }

    function HandleEditClick(){
        setEditUser(user)     
    }
    
    return(
        <div className="w-full p-2 flex overflow-auto scrollbar-hidden text-gray-600">
            <div className="w-2/3 px-2 rounded" >{user.nome}</div>
            <div className="w-1/3 px-2 rounded" >***********</div>
            
            <span className="mx-2 cursor-pointer" onClick={HandleEditClick}>
                <FaEdit/>
            </span>
            <span className="mx-2 cursor-pointer" onClick={HandleDeleteClick}>
                <FaRegTrashAlt/>
            </span>
        </div>
    )
}

export default UserItem;