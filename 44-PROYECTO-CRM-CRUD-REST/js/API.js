const url = 'http://localhost:5555/clientes';

export const nuevoCliente = async cliente => {

    try {
        
        await fetch(url, {
            method: 'POST', 
            headers: {
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(cliente)
        });

        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}

export const obtenerClientes = async () => {

    try {
        const resultado = await fetch(url);
        const clientes = await resultado.json();
        return clientes;

    } catch (error) {
        console.log(error);
    }


}