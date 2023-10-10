import { useRef, useState } from "react";

function ProjectForm(){
    const [disabled, setDisabled] = useState(true)
    const inputNameRef = useRef(null)
    

    function HandleNewClick(){
        if(disabled){
            setDisabled(!disabled)
            setTimeout(() => {
                if (inputNameRef.current) {
                    inputNameRef.current.focus();
                }
              }, 0);
          
        }
    }

    function HandleClearClick(){
        setDisabled(true)
    }

    return (
        <div className="h-[30%] flex flex-col  px-1 py-2 ">
            <input ref={inputNameRef} className="rounded-[7px] border-t-transparent bg-transparent mt-2 px-3 py-2.5 font-sans text-sm outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="Nome" disabled={disabled}/>
            <textarea className="rounded-[7px] border-t-transparent bg-transparent w-full mt-2 px-3 py-2.5 font-sans text-sm outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 resize-none" placeholder="Descricao" disabled={disabled}/>
            <div className="flex justify-end p-2">
                <button onClick={HandleNewClick} className="bg-verde py-1 px-2 rounded text-sm text-white font-bold mr-2" >{disabled ? 'New' : 'Save'}</button>
                <button onClick={HandleClearClick} className="bg-amarelo py-1 px-2 rounded text-sm text-white font-bold mr-1">Cancel</button>
            </div>
        </div>
    )
}

export default ProjectForm;