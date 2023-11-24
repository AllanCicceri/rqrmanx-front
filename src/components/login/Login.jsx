import Logo from '../../assets/logo.png'
import { useContext, useState } from "react";
import { ValidateUser } from "../../api/UsersEndPoint";
import { UserCtx } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";


function Login({setUserLoggedIn}){
    const inputStyle = "m-2 p-1 rounded-md border"
    const [inputName, setInputName] = useState("")
    const [inputPass, setInputPass] = useState("")
    const [user,setUser] = useContext(UserCtx)
    const navigate = useNavigate()

    
    async function HandleSignInClick(){
        const userExists = await ValidateUser(inputName, inputPass)
       
        if(userExists){
            setUserLoggedIn(true)
            setUser(userExists)
            navigate('/')            
        }else{
            alert("Usuário e Senha não econtrados!")
        }
    }

    function HandleInputName(e){
        setInputName(e.target.value)
    }
    function HandleInputPass(e){
        setInputPass(e.target.value)
    }

    return (
        <div className="w-screen h-screen flex">
            <div className="w-1/3 bg-azul flex flex-col items-center justify-center">
                <img src={Logo} alt="" className="w-48 h-38 rounded-xl"/>
                <div className="w-1/2 text-center text-white p-2">
                    <span className="font-bold">RQRMANX</span> é um software de gerenciamento de requisitos de projeto criado para a disciplina Projeto Integrador para Internet. <br/>
                    Nele é possível criar projetos, adicionar requisitos (funcionais ou não), e controlar o versionamento dos requisitos.
                </div>
            </div>

            <div className="w-2/3 bg-cinza flex justify-center items-center">
                <div className="w-1/3 h-1/3 bg-branco rounded-lg flex flex-col justify-center items-center shadow-lg">
                    <h2 className="text-4xl mb-2">Login</h2>
                    <input type="text" className={inputStyle} onChange={HandleInputName} value={inputName}/>
                    <input type="text" className={inputStyle} onChange={HandleInputPass} value={inputPass}/>
                    <button className="bg-azul p-2 " onClick={HandleSignInClick}>SignIn</button>
                </div>
            </div>
        </div>
    )
}

export default Login;