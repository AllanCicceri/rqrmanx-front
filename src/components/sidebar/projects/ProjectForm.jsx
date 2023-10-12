import { useEffect, useState } from "react";
import {SaveProject} from '../../../api/ProjectsEndPoint'

function ProjectForm({ selectedProject, handleShowForm }) {
    const [inputName, setInputName] = useState("")
    const [inputDesc, setInputDesc] = useState("")

    useEffect(() => {
        if (selectedProject !== null) {
            setInputName(selectedProject.nome);
            setInputDesc(selectedProject.descricao);
        }
    }, [selectedProject]);

    function HandleNameChange(event){
        setInputName(event.target.value)
    }

    function HandleSaveClick(){
        let id = 0
        if(selectedProject !== null){
            id = selectedProject.id
        }

        const project = {
            id: id,
            nome: inputName,
            descricao: inputDesc
        }

        SaveProject(project)
        handleShowForm(false)
    }



    return (
        <div className="h-[30%] flex flex-col  px-1 py-2 ">
            <input value={inputName} onChange={HandleNameChange} className="rounded-[7px] border-t-transparent bg-transparent mt-2 px-3 py-2.5 font-sans text-sm outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="Nome" />
            <textarea value={inputDesc} onChange={e => setInputDesc(e.target.value)} className="rounded-[7px] border-t-transparent bg-transparent w-full mt-2 px-3 py-2.5 font-sans text-sm outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 resize-none" placeholder="Descricao" />
            <div className="flex justify-end p-2">
                <button className="bg-verde py-1 px-2 rounded text-sm text-white font-bold mr-2" 
                    onClick={HandleSaveClick}>Salvar</button>
                <button onClick={() => handleShowForm(false)} className="bg-amarelo py-1 px-2 rounded text-sm text-white font-bold mr-1">Cancel</button>
            </div>
        </div>
    )
}

export default ProjectForm;