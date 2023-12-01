import RequirementsHeader from "./requirements/RequirementsHeader";
import RequirementsList from "./requirements/RequirementsList"
import RequirementsForm from "./requirements/RequirementsForm";
import {RequirementCtxProvider} from "../../context/RequirementsContext"
import { useState } from "react";



function MainContainer() {
    const [showForm, setShowForm] = useState(false)

    function HandleAddClick(show){
        setShowForm(show)
    }

    return (
        <RequirementCtxProvider>
            <div className="w-full h-full p-1 flex flex-col">
                <RequirementsHeader onClick={HandleAddClick}/>
                {
                    showForm ? 
                    <RequirementsForm onclickCancel={() => HandleAddClick(false)}/> :
                    <RequirementsList/>
                }
            </div>
        </RequirementCtxProvider>
    )
}

export default MainContainer;