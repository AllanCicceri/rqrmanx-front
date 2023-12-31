import { useContext, useEffect, useRef, useState } from 'react';
import RequirementsItem from './RequirementsItem'
import { ProjectContext } from '../../../context/ProjectsContext';
import { GetRequirementsFromProject } from '../../../api/RequirementsEndPoint';
import { RequirementContext } from '../../../context/RequirementsContext';

function RequirementsList({HandleAddClick}) {
    // const [requirements, setRequirements] = useState([]);
    
    const [projects, setProjects, selectedProject, setSelectedProject] = useContext(ProjectContext);
    const [requirements, setRequirements, selectedRequirement, setSelectedRequirement] = useContext(RequirementContext)
    

    useEffect(() => {

        // console.log("RequirementsList")"AQUI"
    
        const fetchData = async () => {
            const data = await GetRequirementsFromProject(selectedProject);
            setRequirements(data);
        
        };

        if(selectedProject!==null){
            fetchData();
        }


    }, [selectedProject, requirements,selectedRequirement])




    return (
        <div className="w-full h-full overflow-auto p-4 text-gray-600 flex justify-between  flex-wrap gap-4 ">
            {
                requirements.length == 0 ?
                    <div className='text-gray-400 text-4xl w-full h-full flex items-center justify-center'>
                        {
                            selectedProject !== null ?
                                <h1>No Requirements  :(</h1> :
                                <h1>No project Selected :(</h1>
                        }

                    </div> :
                    requirements.map(item => (
                        <RequirementsItem key={item.id} item={item} onClick={HandleAddClick}/>
                    ))
                
            }
        </div>
    )
}

export default RequirementsList;