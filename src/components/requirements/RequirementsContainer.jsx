import RequirementsHeader from "./RequirementsHeader";
import RequirementsMain from "./main/RequirementsMain"

function RequirementsContainer(){
    return (
        <div className="w-full h-full pl-1 flex flex-col">
            <RequirementsHeader/>
            <RequirementsMain/>
        </div>
    )
}

export default RequirementsContainer;