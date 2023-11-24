import { useNavigate } from "react-router-dom"


function UserOptions({onClickUserManaganer}){
    const navigate = useNavigate()

    function HandleLogoutClick(){
        navigate('/login')
    }


    return(
        <div className="w-40 h-12 p-4 bg-cinzaEscuro absolute top-0 right-0 rounded-md flex flex-col justify-center border shadow-lg text-xs">
            <button className="font-bold border-b border-gray-400" onClick={onClickUserManaganer}>User Manager</button>
            <button className="font-bold " onClick={HandleLogoutClick}>LogOut</button>
        </div>
    )
}

export default UserOptions