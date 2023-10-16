import IconButton from '../../auxiliar/IconButton'

function RequirementsItem({item}){
    const text = "RF"
    const color = "bg-verde"
    
    return (
        <div className="w-full sm:w-full md:w-[45%] lg:w-[25%] xl:w-[30%]  h-1/3 m-2 flex flex-col overflow-hidden rounded-md shadow-lg ">
            <div className='h-10%  bg-cinzaEscuro flex justify-between items-center px-2'>
                <div className="">Requisito1</div>
                <IconButton text={text} color={color}/>
            </div>
            <div className='h-full p-2 bg-branco'>descricao do requisito...</div>
        </div>

    )
}

export default RequirementsItem;