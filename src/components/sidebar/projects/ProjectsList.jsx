import { useContext, useEffect, useState } from 'react';
import { GoFileDirectory } from 'react-icons/go';
import { ProjectContext } from '../../../context/ProjectsContext';
import ProjectItem from './ProjectItem'
import { GetAllProjects, DeleteProject } from '../../../api/ProjectsEndPoint';
import MyButton from '../../auxiliar/MyButton';

function ProjectsList({ setShowForm }) {
    const [projects, setProjects, selectedProject, setSelectedProject] = useContext(ProjectContext)
    const [selectedItem,setSelectedItem] = useState(null)



    useEffect(() => {
        async function fetchProjetos(){
            const data = await GetAllProjects()
            setProjects(data)
        }

        fetchProjetos()

    }, [projects, setProjects]);


    function HandleShowForm(item) {
        setShowForm(true, item)
    }

    function HandleClick(id){
        setSelectedItem(id)
        setSelectedProject(id)
    }

    function HandleDeleteButtonClick(){
        if(selectedItem !== null) {
            const deleteSelectedProject = window.confirm("Confirma a exclusão do projeto selecionado?")
            if(deleteSelectedProject){
                DeleteProject(selectedItem)                
            }
        }
    }

    return (
        <div className="flex flex-col ">
            {/* Texto cabeçalho projetos */}
            <header className="text-gray-600 ml-4 flex items-center">
                <GoFileDirectory />
                <p className='ml-2'>Projects</p>
            </header>

            {/* Lista de Projetos */}
            <div className='flex flex-col pl-6 pr-2  overflow-auto scrollbar-hidden h-[90%]'>
                {
                    projects.length <= 0 ? "Carregando..." :
                        (
                            projects.map(item => (
                                <ProjectItem key={item.id} projeto={item} HandleClick={() => HandleClick(item.id)} HandleDoubleClick={() => HandleShowForm(item)} isSelected={item.id === selectedItem ? true : false}/>
                            ))
                        )
                }
            </div>

            {/* Botões add/delete projetos */}
            <div className="flex justify-center py-4 px-2 hadow-2xl shadow-black">
                <MyButton color={"bg-amarelo"} text={"+"} onClickFunction={() => HandleShowForm(null)}/>
                <span className='w-4'></span>
                <MyButton color={"bg-vermelho"} text={"-"} onClickFunction={HandleDeleteButtonClick}/>
            </div>

            
        </div>
    );

}

export default ProjectsList;