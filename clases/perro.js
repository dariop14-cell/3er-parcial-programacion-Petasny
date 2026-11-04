import Animal from "./animal.js";
export default class Perro extends Animal{
    constructor(idAnimal, nombre, peso, tamanio, duenio = null){
        super(idAnimal, nombre, peso, tamanio, duenio);
    }

    hacerSonido(){
        return "Guau Guau"
    }

    moverCola(){
        return `${this.nombre} esta moviendo la cola`
    }
}