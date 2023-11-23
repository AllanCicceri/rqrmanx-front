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
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Erro ao validar usuário:', error);
        throw error; // Rejeita a Promise em caso de erro
    }
}
