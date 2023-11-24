export async function ValidateUser(name, pass) {
    const url = `http://localhost:8080/usuarios/${name}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: pass
        });

        if (response.ok) {
            const data = await response.json()
            
            return data;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Erro ao validar usuário:', error);
        throw error; // Rejeita a Promise em caso de erro
    }
}

export async function InsertUser(user) {
    const url = `http://localhost:8080/usuarios`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        return response
    } catch (error) {
        console.error('Erro ao validar usuário:', error);
        throw error; // Rejeita a Promise em caso de erro
    }

}

export async function UpdateUser(user) {
    const url = `http://localhost:8080/usuarios`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        return response
    } catch (error) {
        console.error('Erro ao validar usuário:', error);
        throw error; // Rejeita a Promise em caso de erro
    }

}


export async function GetAllUsers(){
    const response = await fetch('http://localhost:8080/usuarios')
    
    try{
        const data = await response.json()
        
        return data
    }catch(error){
        console.error(error)
    }
}

export async function DeleteUser(userId){   
    try{
        await fetch(`http://localhost:8080/usuarios/${userId}`, {method: 'DELETE',})
        
        return true
    }catch(error){
        console.error(error)
        return false
    }
}