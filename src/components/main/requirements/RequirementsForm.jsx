import { useContext, useState } from "react";
import MyDropdown from "../../auxiliar/MyDropDown";
import { ProjectContext } from "../../../context/ProjectsContext";
import { CreateRequirement, UpdateRequirement } from "../../../api/RequirementsEndPoint";
import { RequirementContext } from "../../../context/RequirementsContext";
import { useEffect } from "react";

function RequirementsForm({ onclickCancel, selectedRequirement, setSelectedRequirement }) {
    const [inputName, setInputName] = useState('')
    const [inputDescription, setInputDescription] = useState('')
    const [selectRole, setSelectRole] = useState("RF")
    const [versao, setVersao] = useState("1")
    const [projects, setProjects, selectedProject, setSelectedProject] = useContext(ProjectContext)
    


    useEffect(() => {
        if (selectedRequirement != null) {
            setInputName(selectedRequirement.nome)
            setInputDescription(selectedRequirement.descricao)
            setSelectRole(selectedRequirement.tipo)
            setVersao(selectedRequirement.versao)
        }

    }, [selectedRequirement])


    function HandleSaveClick() {
        let id = 0;
        let novaVersao = versao

        if (selectedRequirement != null) {
            id = selectedRequirement.id
            novaVersao = novaVersao + 1
            setVersao(novaVersao)
            console.log("NOVAVER", novaVersao)
        }


        const requirement = {
            id: id,
            nome: inputName,
            descricao: inputDescription,
            tipo: selectRole,
            versao: novaVersao,
            projeto: {
                id: selectedProject
            }

        }

        if (id > 0) {
            const data = UpdateRequirement(requirement)
        } else {
            const data = CreateRequirement(requirement)
        }
        
        setSelectedProject(null)
        setSelectedRequirement(null)
        onclickCancel(false)

    }




    return (

        <div className="w-[40%] h-2/3 p-6 border border-gray rounded-md bg-branco flex flex-col items-center justify-center shadow-lg">
            <input value={inputName} onChange={e => setInputName(e.target.value)} className="rounded-[7px] w-[90%] px-3 py-2 font-sans text-sm outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 border focus:outline-0 disabled:border-0 disabled:bg-blue-gray-200" placeholder="Nome" />
            <textarea value={inputDescription} onChange={e => setInputDescription(e.target.value)} className="rounded-[7px] w-[90%] h-[50%] px-3 my-2 py-2 font-sans text-sm outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 resize-none" placeholder="Descricao" />
            <div className="w-[90%]">
                <MyDropdown options={["RF", "RN"]} onChange={setSelectRole} />
            </div>
            <div className="w-[90%] flex justify-end p-2">
                <div className="w-full flex p-2">
                    <label htmlFor="" className="text-gray-400">versão: {versao}</label>
                </div>
                <button className="bg-verde py-1 px-2 rounded text-sm text-white font-bold mr-2"
                    onClick={HandleSaveClick}>Salvar</button>
                <button className="bg-amarelo py-1 px-2 rounded text-sm text-white font-bold mr-1"
                    onClick={() => onclickCancel(false)}>Cancel</button>
            </div>

        </div>


    )
}

export default RequirementsForm;