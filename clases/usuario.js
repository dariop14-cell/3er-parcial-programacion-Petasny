export default class Usuario {
    #id; #nombreUsuario; #contrasenia;  #duenioCuenta;

        constructor(id, nombreUsuario, contrasenia, duenioCuenta){
            this.#id = id;
            this.#nombreUsuario = nombreUsuario
            this.#contrasenia = contrasenia;
            this.#duenioCuenta = duenioCuenta;
        }

        get id(){
            return this.#id;
        }

        get nombreUsuario(){
            return this.#nombreUsuario   
        }

        get contrasenia(){
            return this.#contrasenia
        }

        get duenioCuenta(){
            return this.#duenioCuenta
        }

        iniciarSesion(nombreUsuario, contrasenia){
            return this.#nombreUsuario === nombreUsuario && this.#contrasenia === contrasenia;
        }
}