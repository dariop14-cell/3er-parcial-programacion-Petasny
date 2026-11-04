export default class Animal{
    #idAnimal; #nombre; #peso; #tamanio; #duenio;

    constructor(idAnimal, nombre, peso, tamanio, duenio){
        this.#idAnimal = idAnimal;
        this.#nombre = nombre;
        this.#peso = peso;
        this.#tamanio = tamanio;
        this.#duenio = duenio;
    }
    get idAnimal(){
        return this.#idAnimal;
    }

    get nombre(){
        return this.#nombre;
    }

    get peso(){
        return this.#peso;
    }

    get tamanio(){
        return this.#tamanio;
    }

    get duenio(){
        return this.#duenio;
    }

    set duenio(duenioNuevo){
        this.#duenio = duenioNuevo;
    }

    hacerSonido(){
        return "El animal hace un sonido";
    }

    comer(){
        return `${this.#nombre} esta comiendo`;
    }
}