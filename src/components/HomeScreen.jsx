import SideContainer from "./sidebar/SideContainer";
import MainContainer from "./main/MainContainer"
import { ProjectCtxProvider } from "../context/ProjectsContext";
import { RequirementCtxProvider } from "../context/RequirementsContext";

function HomeScreen() {
    return (
        <ProjectCtxProvider>
            <div className="w-screen h-screen bg-cinza flex flex-col md:flex-row">
                <SideContainer />
                <RequirementCtxProvider>
                    <MainContainer />
                </RequirementCtxProvider>
            </div>

        </ProjectCtxProvider>
    )
}

export default HomeScreen;