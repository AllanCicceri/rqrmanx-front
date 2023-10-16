import {BsFiletypePdf} from 'react-icons/bs'
import MyButton from '../auxiliar/MyButton';

function SelectedProject(){
    return(
        <div className="text-gray-600 p-6 pr-8  h-[10%] flex justify-between  items-center"> 
                <div className='flex items-center'>
                    <BsFiletypePdf size={30} className='hover:cursor-pointer'/>
                    <div className='ml-4'>
                        <div className="text-lg font-bold">Nome do projeto...</div>
                        <div className="text-sm">Descrição do projeto...</div>
                    </div>
                </div>
                <MyButton color={"bg-azul"} text={"+"}/>
                
                
                
                
         
                
            </div>
    )
}

export default SelectedProject;