import { useEffect, useState } from "react"
import VersionItem from "./VersionItem"
import { GetVersoesFromRequirement } from "../../../api/RequirementsEndPoint"

function VersionsList({selectedRequirement}){
    const [items, setItems] = useState([])


    useEffect(() => {
        async function FetchData(){
            const data = await GetVersoesFromRequirement(selectedRequirement.id)
            setItems(data)
        }

        if(selectedRequirement !== null){
            FetchData()
        }
        
    }, [])

    return (
        <div className="w-[40%] h-2/3 p-2 border rounded shadow-lg overflow-auto">
            {items.reverse().map(item => (
                <VersionItem item={item}/>
            ))}            
        </div>
    )
}

export default VersionsList