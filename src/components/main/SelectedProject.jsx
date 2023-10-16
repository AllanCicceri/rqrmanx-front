import {BsFiletypePdf} from 'react-icons/bs'

function SelectedProject(){
    return(
        <div className="text-gray-600 p-4 h-[10%] flex  items-center"> 
                <div className="w-12 mx-4">
                    <BsFiletypePdf size={30}/>
                </div>
                <div>
                    <div className="text-lg font-bold">Nome do projeto...</div>
                    <div className="text-sm">Descrição do projeto...</div>
                </div>
                
            </div>
    )
}

export default SelectedProject;