import RequirementsHeader from "./requirements/RequirementsHeader";
import RequirementsList from "./requirements/RequirementsList"
import SelectedProject from "./SelectedProject";
import RequirementsForm from "./requirements/RequirementsForm";
import { useState } from "react";



function MainContainer() {
    const [showForm, setShowForm] = useState(false)

    return (
        <div className="w-full h-full p-1 flex flex-col">
            <RequirementsHeader/>
            <RequirementsList/>
        </div>
    )
}

export default MainContainer;