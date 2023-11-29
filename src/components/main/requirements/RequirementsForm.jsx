import { useState } from "react";
import MyDropdown from "../../auxiliar/MyDropDown";

function RequirementsForm({onclickCancel}){
    const [selectRole, setSelectRole] = useState("RF")

   

    return(
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-2/3 h-2/3 p-6 border border-gray rounded-md bg-branco flex flex-col items-center justify-center shadow-lg">
                <input className="rounded-[7px] w-[90%] px-3 py-2 font-sans text-sm outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="Nome" />
                <textarea className="rounded-[7px] w-[90%] h-[50%] px-3 my-2 py-2 font-sans text-sm outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 resize-none" placeholder="Descricao" />
                <div className="w-[90%]">
                    <MyDropdown options={["RF", "RN"]} onChange={setSelectRole}/>
                </div>
                <div className="w-[90%] flex justify-end p-2">
                    <button className="bg-verde py-1 px-2 rounded text-sm text-white font-bold mr-2" 
                        >Salvar</button>
                    <button  className="bg-amarelo py-1 px-2 rounded text-sm text-white font-bold mr-1"
                    onClick={() => onclickCancel(false)}>Cancel</button>
                </div>           

            </div>
        </div>
    )
}

export default RequirementsForm;