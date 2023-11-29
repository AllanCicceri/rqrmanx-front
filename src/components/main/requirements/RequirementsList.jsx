import { useContext, useEffect, useState } from 'react';
import RequirementsItem from './RequirementsItem'
import { ProjectContext } from '../../../context/ProjectsContext';

function RequirementsList(){
    const [requirements, setRequirements] = useState([])
    const [projects, setProjects, selectedProject, setSelectedProject] = useContext(ProjectContext)

    useEffect(() => {
        

    }, [selectedProject])
    
    // const list = [{id:1,nome:'Requisito1', descricao:"descricao teste"},{id:2,nome:'Teste', descricao:"descricao teste"},
    // {id:3,nome:'Teste', descricao:"descricao teste"},{id:4,nome:'Teste', descricao:"descricao teste"},{id:4,nome:'Teste', descricao:"descricao teste"},
    // {id:4,nome:'Teste', descricao:"descricao teste"},{id:4,nome:'Teste', descricao:"descricao teste"},{id:4,nome:'Teste', descricao:"descricao teste"},{id:4,nome:'Teste', descricao:"descricao teste"},
    // {id:4,nome:'Teste', descricao:"descricao teste"},{id:4,nome:'Teste', descricao:"descricao teste"},{id:4,nome:'Teste', descricao:"descricao teste"},{id:4,nome:'Teste', descricao:"descricao teste"}]

    return (
        <div className="w-full h-full overflow-auto p-4 text-gray-600 flex justify-between  flex-wrap gap-4 ">
            {
                requirements.map(item => (
                    <RequirementsItem key={item.id} ìtem={item}/>
                ))
            }
        </div>
    )
}

export default RequirementsList;