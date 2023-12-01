function VersionItem({item}){
    return(
        <div className="w-full h-20 border-b flex flex-col text-gray-400">
            <div className="w-full flex justify-between">
                <div className="w-[80%]">{item.nome}</div>
                <div className="w-[10%]">v_{item.versao}</div>
            </div>
            <div className="w-full h-full text-xs">
                {item.descricao}
            </div>
        </div>
    )
}

export default VersionItem