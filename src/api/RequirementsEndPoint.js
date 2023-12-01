export async function GetRequirementsFromProject(id) {
    const response = await fetch(`http://localhost:8080/requisitos/projeto/${id}`)
    try {
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}


export async function CreateRequirement(requirement) {
    const url = "http://localhost:8080/requisitos";

    if (requirement.nome.length > 0 && requirement.descricao.length > 0) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requirement)
            });

            if (!response.ok) {
                throw new Error(`Erro ao criar requisito: ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}


export async function UpdateRequirement(requirement) {
    const url = `http://localhost:8080/requisitos/${requirement.id}`;

    console.log("UPPDATE", requirement)

    if (requirement.nome.length > 0 && requirement.descricao.length > 0) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requirement)
            });

            if (!response.ok) {
                throw new Error(`Erro ao criar requisito: ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}


export async function DeleteRequirement(id) {
    let url = "http://localhost:8080/requisitos"

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

export async function GetVersoesFromRequirement(id) {
    const response = await fetch(`http://localhost:8080/versoesRequisito/${id}`)
    try {
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}