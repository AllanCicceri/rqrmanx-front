import { useState, useEffect } from "react";
import MyDropdown from "../auxiliar/MyDropDown";
import { InsertUser, UpdateUser } from "../../api/UsersEndPoint";
import LogoContainer from "../sidebar/LogoContainer";
import { MdOutlineHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";



function UserForm({setUsers, editUser, setEditUser}) {
    const inputStyle = 'm-2 p-2 w-2/3 rounded shadow'
    const buttonStyle = 'rounded px-2 py-1 text-white'

    const [inputName, setInputName] = useState('')
    const [inputPass, setInputPass] = useState('')
    const [inputRole, setInputRole] = useState('admin')
    const navigate = useNavigate()

    useEffect(() => {
        if (editUser) {
            setInputName(editUser.nome || '');
        }
    }, [editUser]);



    async function HandleSaveClick() {
        let id = 0
        if(editUser !== null){
            id = editUser.id
        }
        const user = {
            id:  id,
            nome: inputName,
            password: inputPass,
            role: inputRole
        };

        let apiReturn = false
        if(user.id === 0){
            apiReturn = await InsertUser(user);
        }else{
            apiReturn = await UpdateUser(user);
        }

        if (apiReturn.ok) {
            setUsers([])
            alert('Usuário Salvo!')
            ClearFields()
        }

        setEditUser(null)
    }

    function ClearFields() {
        setInputName('')
        setInputPass('')
        setEditUser(null)
    }

    function HandleHomeClick(){
        navigate('/')
    }


    return (
        <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <LogoContainer/>
            <h2 className="m-2 text-gray-600 text-4xl">Registration</h2>
            <input type="text" className={inputStyle} placeholder="Name" value={inputName} onChange={e => setInputName(e.target.value)} />
            <input type="text" className={inputStyle} placeholder="Password" value={inputPass} onChange={e => setInputPass(e.target.value)} />
            <div className="w-2/3 flex justify-end">
                <MyDropdown options={["Admin", "User"]} onChange={setInputRole} />
            </div>
            <div className="w-2/3">
                <button className={"bg-verde mr-2 " + buttonStyle} onClick={HandleSaveClick}>Save</button>
                <button className={"bg-amarelo " + buttonStyle} onClick={ClearFields}>Cancel</button>
            </div>
            <div className="rounded-full border p-2 mt-20 cursor-pointer" onClick={HandleHomeClick}>
                <MdOutlineHome size={40} color="gray"/>
            </div>
        </div>
    )
}

export default UserForm;