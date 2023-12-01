import RequirementsHeader from "./requirements/RequirementsHeader";
import RequirementsList from "./requirements/RequirementsList"
import RequirementsForm from "./requirements/RequirementsForm";
import VersionsList from "./requirements/VersionsList"
import { RequirementContext, RequirementCtxProvider } from "../../context/RequirementsContext"
import { useContext, useState } from "react";



function MainContainer() {
    const [showForm, setShowForm] = useState(false)
    const [requirements, setRequirements, selectedRequirement, setSelectedRequirement] = useContext(RequirementContext)

    function HandleAddClick(show) {
        setShowForm(show)
    }

    return (

        <div className="w-full h-full p-1 flex flex-col">
            <RequirementsHeader onClick={HandleAddClick} />
            {
                showForm ?
                    <div className="w-full h-full flex justify-center items-center">
                        <RequirementsForm onclickCancel={() => HandleAddClick(false)} selectedRequirement={selectedRequirement} setSelectedRequirement={setSelectedRequirement}/>
                        <VersionsList selectedRequirement={selectedRequirement}/>
                    </div> :
                    <RequirementsList HandleAddClick={HandleAddClick} />
            }
        </div>

    )
}

export default MainContainer;