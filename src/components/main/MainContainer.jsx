import RequirementsHeader from "./requirements/RequirementsHeader";
import RequirementsList from "./requirements/RequirementsList"
import SelectedProject from "./SelectedProject";


function MainContainer(){
    return (
        <div className="w-full h-full p-1 flex flex-col">
            <RequirementsHeader/>
            <SelectedProject/>
            <RequirementsList/>
        </div>
    )
}

export default MainContainer;