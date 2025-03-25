function Loguear() {
    let username = document.getElementById('username').value
    let password = document.getElementById('clave').value

    if(username == 'Alexandra' && password == '123456'){
        alert('Usuario valido')
    }else{
        alert('usuario incorrecto')
    }  
    document.getElementById('registroForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío tradicional del formulario
    
        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const contrasena = document.getElementById('contrasena').value;
    
        // Aquí puedes realizar la validación de datos
        if (!nombre || !email || !contrasena) {
            alert('Por favor, complete todos los campos.');
            return;
        }
    
        // Ejemplo: Enviar datos a un servidor (simulado)
        const datosRegistro = {
            nombre: nombre,
            email: email,
            contrasena: contrasena
        };
    
        fetch('/registro', { // Reemplaza '/registro' con la URL de tu servidor
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosRegistro)
        })
        .then(response => response.json())
        .then(data => {
            if (data.exito) {
                alert('Registro exitoso');
            } else {
                alert('Error en el registro: ' + data.mensaje);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Ocurrió un error inesperado.');
        });
    });
}