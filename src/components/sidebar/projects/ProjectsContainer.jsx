import ProjectsList from "./ProjectsList";
import ProjectForm from "./ProjectForm";
import { ProjectCtxProvider } from "../../../context/ProjectsContext";
import { useState } from "react";


function ProjectsContainer() {
    const [showForm, setShowForm] = useState(false)
    const [selectProject, setSelectProject] = useState(null)
    


    function HandleShowForm(show, selectedItem) {
        if(selectedItem === null){
            setSelectProject(null)
        }else{
            setSelectProject(selectedItem)
        }
        setShowForm(show)        
    }

    function RenderForm(){
        return (
            
            <ProjectForm handleShowForm={HandleShowForm} selectedProject={selectProject} /> 
        )
    }


    return (
        
            <div className="h-[70%]">
                {showForm ?
                    RenderForm():
                    <ProjectsList setShowForm={HandleShowForm} />
                }
            </div>
        
    )
}

export default ProjectsContainer;