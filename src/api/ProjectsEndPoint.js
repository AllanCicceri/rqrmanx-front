export function SaveProject(project) {
    if (project !== undefined) {
        const bodyData = {
            nome: project.nome,
            descricao: project.descricao
        }

        let url = "http://localhost:8080/projetos"
        let method = "POST"

        if (project.id > 0) {
            url += `/${project.id}`
        }

        if (bodyData.nome.length > 0 && bodyData.descricao.length > 0) {
            fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Erro ao salvar projeto")
                    }

                    return response.json()
                })
                .catch(error => console.error(error))
        }

    }

}

export async function GetAllProjects() {
    const response = await fetch('http://localhost:8080/projetos')
    try{
        const data = await response.json()
        return data
    }catch(error){
        console.error(error)
    }
}

export function DeleteProject(id) {
    let url = "http://localhost:8080/projetos"

    if (id > 0) {
        url += `/${id}`

        fetch(url, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao excluir projeto")
                }
        })
        .catch(error => console.error(error))
    }


}