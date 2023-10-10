import ProjectsList from "./ProjectsList";
import ProjectForm from "./ProjectForm";
import { ProjectCtxProvider } from "../../../context/ProjectsContext";

function ProjectsContainer(){
    return (
        <ProjectCtxProvider>
            <div className="h-full">
                <ProjectsList/>
                <ProjectForm/>
            </div>
        </ProjectCtxProvider>
    )
}

export default ProjectsContainer;