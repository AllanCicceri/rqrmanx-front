import LogoContainer from "./LogoContainer";
import UserContainer from "./UserContainer";
import ProjectsContainer from "./projects/ProjectsContainer";
import { UserCtx } from "../../context/UserContext";
import { useContext } from "react";

function SideContainer(){
        
    return(
        <div className="bg-branco h-screen w-full md:w-1/5 flex flex-col">
            <LogoContainer/>
            <ProjectsContainer/>
            <UserContainer/>
        </div>
    )
}

export default SideContainer;