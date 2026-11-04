import { usuarios } from "./datos.js";
const formulario = document.getElementById("formulario-login");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    const nombreUsuario = document.getElementById("usuario").value;
    const contrasenia = document.getElementById("password").value;

    if (nombreUsuario === "" || contrasenia === ""){
        alert("Campos vacios. Completar los datos");
        return;
    }

    const usuarioEncontrado = usuarios.find(usuario => usuario.iniciarSesion(nombreUsuario, contrasenia));

    if(usuarioEncontrado){
        sessionStorage.setItem("usuarioActivo", usuarioEncontrado.id);    
        window.location.href = "./index.html"
    }else{
        alert ("usuario y/o contraseña incorrectos");
    }
})