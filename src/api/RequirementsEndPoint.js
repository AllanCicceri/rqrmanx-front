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
