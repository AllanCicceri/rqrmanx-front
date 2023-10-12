function ProjectItem({ projeto, HandleDoubleClick, HandleClick, isSelected }) {
    let styles = "flex flex-col p-1 hover:bg-cinza hover:cursor-pointer "

    if(isSelected){
        styles += "bg-cinza"
    }

    return (
        <div className={styles} onClick={() => HandleClick(projeto.id)} onDoubleClick={() => HandleDoubleClick(true) }>
            <div className="text-sm text-gray-600">{projeto.nome}</div>
            <div className="text-xs text-gray-400">{projeto.descricao}</div>
        </div>
    )
}

export default ProjectItem;