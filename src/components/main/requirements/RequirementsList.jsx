import RequirementsItem from './RequirementsItem'

function RequirementsList(){
    const list = [{id:1,nome:'Requisito1', descricao:"descricao teste"},{id:2,nome:'Teste', descricao:"descricao teste"},
    {id:3,nome:'Teste', descricao:"descricao teste"},{id:4,nome:'Teste', descricao:"descricao teste"},{id:4,nome:'Teste', descricao:"descricao teste"}]

    return (
        <div className="w-full h-full p-4 text-gray-600 flex flex-wrap gap-4 ">
            {
                list.map(item => (
                    <RequirementsItem key={item.id} ìtem={item}/>
                ))
            }
        </div>
    )
}

export default RequirementsList;