import Persona from "./persona.js";
export default class Cliente extends Persona{
    #nro_socio; #mascotas;

    constructor(nombre, apellido, dni, nro_socio){
        super (nombre, apellido, dni);
        this.#nro_socio = nro_socio;
        this.#mascotas = [];
    }

    get nro_socio(){
        return this.#nro_socio;
    }

    get mascotas(){
        return [...this.#mascotas];
    }

    adoptar(mascota, fecha){
        if (mascota.duenio !== null){
            return false;
        }
        mascota.duenio = this;

        this.#mascotas.push({
            mascota: mascota, fechaAdopcion: fecha
        });
        return true;
    }
}