import Persona from "./persona.js";
export default class Trabajador extends Persona {
    #nroLegajo
    constructor(nombre, apellido, dni, nroLegajo){
        super(nombre, apellido, dni);
        this.#nroLegajo = nroLegajo
    }

    get nroLegajo(){
        return this.#nroLegajo
    }

    alimentarAnimal(animal){
        if (!animal){
            return false;
        }
        return animal.comer()
    }

    cargarAdopcion(animal, cliente, fecha){
        if(!animal || !cliente || !fecha){
            return false;
        }

        if(animal.duenio !== null){
            return false;
        }

        return cliente.adoptar(animal, fecha);
    }
}