import UserImg from '../../assets/admin.svg'

function UserContainer(){
    return(
        <div className="h-[15%] flex justify-center items-center">
            <img src={UserImg} alt=""  className='h-12 w-12 bg-cinza rounded-full border-solid border-2'/>
            <div className='ml-2 text-gray-600'>Nome do User</div>
        </div>
    )
}

export default UserContainer;