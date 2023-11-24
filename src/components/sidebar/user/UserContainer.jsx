import { useContext, useState } from 'react';
import UserImg from '../../../assets/admin.svg'
import { UserCtx } from '../../../context/UserContext';
import UserOptions from './UserOptions';
import { useNavigate } from 'react-router-dom';



function UserContainer(){
    const userName = useContext(UserCtx)[0].nome
    const [showUserOptions, setShowUserOptions] = useState(false)
    const navigate = useNavigate()
    

    function HandleUserOptionsClick(){
        navigate("/users")
    }

    return(
        <div className="h-[15%] flex flex-col justify-center items-center relative">
            <img src={UserImg} alt=""  className='h-12 w-12 p-1 mb-2 bg-cinza rounded-full border-solid border-2 cursor-pointer' onClick={()=> setShowUserOptions(!showUserOptions)}/>
            {showUserOptions?<UserOptions onClickUserManaganer={HandleUserOptionsClick}/>:""}
            <div className='ml-2 text-gray-600'>{userName}</div>
        </div>
    )
}

export default UserContainer;