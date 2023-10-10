import ProjectsList from "./ProjectsList";
import ProjectForm from "./ProjectForm";
import { ProjectCtxProvider } from "../../../context/ProjectsContext";

function ProjectsContainer(){
    return (
        <ProjectCtxProvider>
            <div className="h-[70%]">
                <ProjectsList/>
                <ProjectForm/>
            </div>
        </ProjectCtxProvider>
    )
}

export default ProjectsContainer;