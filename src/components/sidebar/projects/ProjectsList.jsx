import { GoFileDirectory } from 'react-icons/go';

function ProjectsList() {
    return (
        <div className="flex flex-col h-2/3">
            <header className="text-gray-600 ml-4 flex items-center">
                <GoFileDirectory />
                <p className='ml-2'>Projects</p>
            </header>

            <div className=''>
                carregando...
            </div>

        </div>
    );

}

export default ProjectsList;