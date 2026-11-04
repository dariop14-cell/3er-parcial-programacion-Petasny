export default class Persona{
    #nombre; #apellido; #dni;

    constructor(nombre, apellido, dni){
        this.#nombre = nombre; 
        this.#apellido = apellido;
        this.#dni = dni;
    }

    get nombre(){
        return this.#nombre;
    }

    get apellido(){
        return this.#apellido;
    }

    get dni(){
        return this.#dni
    }
}