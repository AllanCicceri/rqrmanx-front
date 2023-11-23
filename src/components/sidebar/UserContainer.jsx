import { useContext, useState } from 'react';
import UserImg from '../../assets/admin.svg'
import { UserCtx } from '../../context/UserContext';
import UserManager from './UserOptions';


function UserContainer(){
    const [user] = useContext(UserCtx)
    const [showUserManager, setShowUserManager] = useState(false)


    function HandleClick(){
        setShowUserManager(!showUserManager)
    }

    return(
        
        <div className="h-[15%] flex justify-center items-center relative">
            
            <img src={UserImg} alt=""  className='h-12 w-12 bg-cinza rounded-full border-solid border-2 cursor-pointer' onClick={HandleClick}/>
            {showUserManager?<UserManager/>:""}
            <div className='ml-2 text-gray-600'>{user}</div>
        </div>
    )
}

export default UserContainer;