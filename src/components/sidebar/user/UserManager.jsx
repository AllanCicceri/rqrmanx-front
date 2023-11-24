import MyDropdown from "../../auxiliar/MyDropDown"
import MyButton from "../../auxiliar/MyButton"
import { useState } from "react"
import {InsertUser} from "../../../api/UsersEndPoint"
import { useEffect } from "react"


function UserManager({cancelClick, user}){
    const inputStyle = "border rounded"

    console.log("usuario", user)

    const [inputUser,setInputUser] = useState(user!=null?user.nome:'')
    const [inputPass,setInputPass] = useState(user!=null?user.password:'')
    const [inputRole,setInputRole] = useState('admin')


    // useEffect(() => {
    //     if(user && user.nome && user.password){
    //         setInputUser(user.nome)
    //         setInputPass(user.password)
    //     }
    //   }, [user]);
    

    async function HandleSaveClick(){
        const user = {
            id: 0,
            nome: inputUser,
            password: inputPass,
            role: inputRole
        };

        const isUserInserted = await InsertUser(user);
        
        console.log("Retorno: ", isUserInserted)

        cancelClick()
        
    }

    return(
        <div className="w-full p-2 flex flex-col">
            <input type="text" className={inputStyle} placeholder="name" value={inputUser} onChange={(e) => setInputUser(e.target.value)}/>
            <input type="text" className={inputStyle} placeholder="password" value={inputPass} onChange={(e) => setInputPass(e.target.value)}/>
            <select value={inputRole} onChange={(e) => setInputRole(e.target.value)}>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
            </select>
            <div className="w-full p-2 flex justify-around">
                <MyButton color={"bg-verde"} text={"Save"} onClickFunction={HandleSaveClick}/>
                <MyButton color={"bg-amarelo"} text={"Cancel"} onClickFunction={cancelClick}/>                    
            </div>
        </div>
    )
}

export default UserManager