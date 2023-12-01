import { MdOutlineDelete } from "react-icons/md";
import IconButton from '../../auxiliar/IconButton'
import { useContext } from 'react'
import { RequirementContext } from '../../../context/RequirementsContext'
import { DeleteRequirement } from "../../../api/RequirementsEndPoint";

function RequirementsItem({item, onClick}){
    const [requirements, setRequirements, selectedRequirement, setSelectedRequirement] = useContext(RequirementContext)

    const text = "RF"
    const color = "bg-verde"
    
    

    function HandleClick(){
        setSelectedRequirement(item)
        onClick(true)
    }

    function HandleTrashClick(){
        DeleteRequirement(item.id)

    }

    return (
        <div className="w-full sm:w-full md:w-[45%] lg:w-[25%] xl:w-[30%]  h-1/3 m-2 flex flex-col overflow-hidden rounded-md shadow-lg cursor-pointer" onDoubleClick={HandleClick}>
            <div className='h-10%  bg-cinzaEscuro flex justify-between items-center px-2'>
                <div className="">{item.nome}</div>
                <IconButton text={text} color={color}/>
            </div>
            <div className='h-full p-2 bg-branco'>{item.descricao}</div>
            <div className="w-full flex justify-end p-2 bg-branco">
                <div className="p-1 rounded-full border z-99" onClick={HandleTrashClick}>
                    <MdOutlineDelete size={25} color="gray"/>
                </div>
            </div>
        </div>

    )
}

export default RequirementsItem;