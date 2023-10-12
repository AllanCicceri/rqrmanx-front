import ProjectsList from "./ProjectsList";
import ProjectForm from "./ProjectForm";
import { ProjectCtxProvider } from "../../../context/ProjectsContext";
import { useState } from "react";


function ProjectsContainer() {
    const [showForm, setShowForm] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)


    function HandleShowForm(show, selectedItem) {
        if(selectedItem === null){
            setSelectedProject(null)
        }else{
            setSelectedProject(selectedItem)
        }
        setShowForm(show)        
    }

    function RenderForm(){
        return (
            
            <ProjectForm handleShowForm={HandleShowForm} selectedProject={selectedProject} /> 
        )
    }


    return (
        <ProjectCtxProvider>
            <div className="h-[70%]">
                {showForm ?
                    RenderForm():
                    <ProjectsList setShowForm={HandleShowForm} />
                }
            </div>
        </ProjectCtxProvider>
    )
}

export default ProjectsContainer;