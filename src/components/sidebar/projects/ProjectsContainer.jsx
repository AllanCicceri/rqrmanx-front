import ProjectsList from "./ProjectsList";
import ProjectForm from "./ProjectForm";

function ProjectsContainer(){
    return (
        <div className="h-full">
            <ProjectsList/>
            <ProjectForm/>
        </div>
    )
}

export default ProjectsContainer;