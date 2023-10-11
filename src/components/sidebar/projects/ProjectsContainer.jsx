import ProjectsList from "./ProjectsList";
import ProjectForm from "./ProjectForm";
import { ProjectContext, ProjectCtxProvider } from "../../../context/ProjectsContext";
import { useContext, useState } from "react";


function ProjectsContainer() {
    const [showForm, setShowForm] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)


    function HandleShowForm(show, selectedItem) {
        setSelectedProject(selectedItem)
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