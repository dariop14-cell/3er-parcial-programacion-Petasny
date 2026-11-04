import Animal from "./animal.js";
export default class Gato extends Animal{
    constructor(idAnimal, nombre, peso, tamanio, duenio = null){
        super(idAnimal, nombre, peso, tamanio, duenio);
    }

    hacerSonido(){
        return "Miau Miau"
    }

    ronronear(){
        return `${this.nombre} esta ronroneando`;
    }
}