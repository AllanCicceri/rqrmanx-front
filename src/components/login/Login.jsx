import MyButton from "../auxiliar/MyButton";
import Logo from '../../assets/logo.png'

function Login({onclick}){
    const inputStyle = "m-2 p-1 rounded-md border"

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
                    <input type="text" className={inputStyle}/>
                    <input type="text" className={inputStyle}/>
                    <MyButton color="bg-azul" text="signin" onClickFunction={onclick}/>                    
                </div>
            </div>
        </div>
    )
}

export default Login;