function ProjectItem({titulo, descricao, HandleDoubleClick}){
    return(
        <div className="flex flex-col p-1 hover:bg-cinza" onDoubleClick={() => HandleDoubleClick(true)}>
            <div className="text-sm text-gray-600">{titulo}</div>
            <div className="text-xs text-gray-400">{descricao}</div>            
        </div>
    )
}

export default ProjectItem;