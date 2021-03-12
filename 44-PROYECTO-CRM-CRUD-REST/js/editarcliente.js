import { obtenerCliente } from "./API.js";

(function() {

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const empresaInput = document.querySelector('#empresa');
    const telefonoInput = document.querySelector('#telefono');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () => {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get('id'));
        const cliente  = await obtenerCliente(idCliente);
        mostrarCliente(cliente);
    });

    function mostrarCliente(cliente) {
        const { nombre, empresa, email, telefono, id } = cliente;
        nombreInput.value = nombre;
        empresaInput.value = empresa;
        emailInput.value = email;
        telefonoInput.value = telefono;
        idInput.value = id;

        
    }

})();