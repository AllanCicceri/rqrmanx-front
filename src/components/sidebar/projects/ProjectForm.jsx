function ProjectForm(){
    return (
        <div className="h-1/3 flex flex-col justify-between px-2">
            <div className="text-gray-600">Add Project</div>
            <input className="rounded-[7px] border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" placeholder="Nome"/>
            <textarea className="rounded-[7px] border-t-transparent bg-transparent w-full px-3 py-2.5 font-sans text-sm outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 resize-none" placeholder="Descricao"/>
            <div className="flex justify-end">
                <button className="bg-verde py-1 px-2 rounded text-sm text-white font-bold mr-2">Save</button>
                <button className="bg-amarelo py-1 px-2 rounded text-sm text-white font-bold mr-1">Clear</button>
            </div>
        </div>
    )
}

export default ProjectForm;