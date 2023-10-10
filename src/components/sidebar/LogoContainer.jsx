import Logo from '../../assets/logo.png'

function LogoContainer(){
    return (
        <div className="h-[15%] flex justify-center">
            <img className='h-full w-auto' src={Logo} alt="logo da empresa"  />
        </div>
    )
}

export default LogoContainer;