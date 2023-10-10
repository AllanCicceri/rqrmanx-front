import { useContext, useEffect } from 'react';
import { GoFileDirectory } from 'react-icons/go';
import { ProjectContext } from '../../../context/ProjectsContext';
import ProjectItem from './ProjectItem'


function ProjectsList() {
    const [projects, setProjects] = useContext(ProjectContext)


    useEffect(() => {
        async function fetchProjetos() {
            try {
                const response = await fetch('http://localhost:8080/projetos')
                const data = await response.json()

                setProjects(data)

            } catch (error) {
                console.log(error)
            }
        }

        fetchProjetos()
    }, [projects, setProjects]);

    return (
        <div className="flex flex-col h-2/3">
            {/* Texto cabeçalho projetos */}
            <header className="text-gray-600 ml-4 flex items-center">
                <GoFileDirectory />
                <p className='ml-2'>Projects</p>
            </header>

            {/* Lista de Projetos */}
            <div className='flex flex-col p-6  overflow-auto scrollbar-hidden h-[90%]'>
                {
                    projects.length <= 0 ? "Carregando..." :
                        (
                            projects.map(item => (
                                <ProjectItem key={item.id} titulo={item.nome} descricao={item.descricao} />
                            ))
                        )
                }
            </div>


        </div>
    );

}

export default ProjectsList;