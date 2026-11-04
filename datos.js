import Usuario from "./clases/usuario.js";
import Cliente from "./clases/cliente.js";
import Trabajador from "./clases/trabajador.js";
import Perro from "./clases/perro.js";
import Gato from "./clases/gato.js";

const cliente1 = new Cliente(
    "Juan",
    "Perez",
    "12345678",
    100
);

const cliente2 = new Cliente(
    "Dario",
    "Petasny",
    "14082006",
    110
);

const trabajador1 = new Trabajador(
    "Pedro",
    "Gomez",
    "87654321",
    10
);

const trabajador2 = new Trabajador (
    "Joaquin",
    "Freitas",
    "44324645",
    150
);

const cliente3 = new Cliente ( 
    "Maria",
    "Torres",
    "22435985",
    120
)

export const usuarios = [
    new Usuario (1, "cliente1", "1234", cliente1),
    new Usuario (2, "admin", "4321", trabajador1),
    new Usuario (3, "cliente2", "1408", cliente2),
    new Usuario (4, "admin2","8910", trabajador2),
    new Usuario (5, "cliente3", "7654", cliente3)
];

export const animales = [
    new Perro(1, "Toby", 12, "Mediano"),
    new Gato(2,"Michi", 4, "Pequeño"),
    new Gato (3, "Albondiga", 3, "pequeño"),
    new Perro (4, "Firu", 20, "Grande"),
    new Perro (5, "Macri", 13, "Mediano"),
    new Gato (6, "Manchitas", 3, "Pequeño"),
    new Gato (7, "Felicia", 4, "Mediano"),
    new Perro (8, "Lando", 10, "Mediano"),
    new Gato (9, "Tom", 6, "Mediano"),
    new Perro (10, "Max", 13, "Grande")
];

export const clientes = [cliente1, cliente2, cliente3];
export const trabajadores = [trabajador1, trabajador2];