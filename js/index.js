/*Requerimientos de inicio*/

function Loguear() {
    let username = document.getElementById('username').value
    let password = document.getElementById('clave').value

    let user = JSON.parse(localStorage.getItem("user"))

    if (user == null) {
        alert('No has iniciado sesion')
        window.location.href = "../index.html"
    } else if (user[2] == username && user[3] == password) {
        localStorage.setItem("user", username);
        window.location.href = "../vistas/Entrenador.html"
        alert('Usuario valido')
    }

}