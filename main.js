import { usuarios, animales, clientes } from "./datos.js";
import Cliente from "./clases/cliente.js";
import Trabajador from "./clases/trabajador.js";

const idUsuario = sessionStorage.getItem("usuarioActivo");
const usuarioActivo = usuarios.find(
    usuario => String(usuario.id) === idUsuario
);

const seccionTrabajador = document.getElementById("seccion-trabajador");
const seccionCliente = document.getElementById("seccion-cliente");
const formularioAdopcion = document.getElementById("form-adopcion")
const btnCargarAdopcion = document.getElementById("btn-cargarAdopcion");
const modalAdopcion = document.getElementById("modal-adopcion");
const btnCancelar = document.getElementById("btn-cancelar");

const selectMascota = document.getElementById("mascota");
const selectCliente = document.getElementById("cliente");

recuperarAdopciones()
if (!usuarioActivo) {
    alert("Es necesario iniciar sesion para acceder");
    window.location = "./login.html";
} else {
    const persona = usuarioActivo.duenioCuenta;

    if (persona instanceof Trabajador) {
        seccionTrabajador.hidden = false;

        formularioAdopcion.addEventListener("submit", function (event) {
            event.preventDefault();

            const idMascota = selectMascota.value;
            const nroSocio = selectCliente.value;
            const fecha = document.getElementById("fecha-adopcion").value;

            if (!idMascota || !nroSocio || !fecha) {
                alert("hay campos vacios")
                return
            }

            const mascotaSeleccionada = animales.find(
                animal => String(animal.idAnimal) === idMascota
            );

            const clienteSeleccionado = clientes.find(
                cliente => String(cliente.nro_socio) === nroSocio
            );

            if (!mascotaSeleccionada || !clienteSeleccionado) {
                alert("no se encontro a la mascota u al cliente");
                return
            }

            const resultado = usuarioActivo.duenioCuenta.cargarAdopcion(
                mascotaSeleccionada, clienteSeleccionado, fecha
            );

            if (resultado) {
                alert("adopcion registrada correctamente");

                const adopcionesGuardadas = JSON.parse(
                    localStorage.getItem("adopciones")
                ) || [];
                adopcionesGuardadas.push({
                    idMascota: mascotaSeleccionada.idAnimal,
                    nroSocio: clienteSeleccionado.nro_socio,
                    fecha: fecha
                });

                localStorage.setItem(
                    "adopciones",
                    JSON.stringify(adopcionesGuardadas)
                );
                formularioAdopcion.reset();
                modalAdopcion.hidden = true;
                cargarMascotasDisponibles()
            } else {
                alert("no se pudo completar la adopcion")
            }
        });

        btnCargarAdopcion.addEventListener("click", function () {
            cargarMascotasDisponibles();
            cargarClientes();
            modalAdopcion.hidden = false;
        });

        btnCancelar.addEventListener("click", function () {
            modalAdopcion.hidden = true;
        });
    } else if (persona instanceof Cliente) {
        seccionCliente.hidden = false;
        mostrarMascotas(persona);
    } else {
        alert("usuario no reconocido");
        sessionStorage.removeItem("usuarioActivo");
        window.location.href = "./login.html";
    }
}

function mostrarMascotas(cliente) {
    const contenedor = document.getElementById("contenedor-mascotas");
    contenedor.innerHTML = "";
    cliente.mascotas.forEach(registro => {
        const mascota = registro.mascota;
        const tarjeta = document.createElement("div");
        const titulo = document.createElement("h3");
        titulo.textContent = mascota.nombre;
        const tipo = document.createElement("p");
        tipo.textContent = mascota.constructor.name;
        const fecha = document.createElement("p");
        fecha.textContent = `fecha de adopcion: ${registro.fechaAdopcion}`;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(tipo);
        tarjeta.appendChild(fecha)

        contenedor.appendChild(tarjeta);
    });
}

function cargarMascotasDisponibles() {
    selectMascota.innerHTML = '<option value="">Elija una masxota</option>';
    const mascotasDisponibles = animales.filter(animal => animal.duenio === null);

    mascotasDisponibles.forEach(animal => {
        const opcion = document.createElement("option");
        opcion.value = animal.idAnimal;
        opcion.textContent = `${animal.nombre} - ${animal.constructor.name}`;

        selectMascota.appendChild(opcion);
    });
}

function cargarClientes() {
    selectCliente.innerHTML = '<option value="">Seleccione un cliente</option>';

    clientes.forEach(cliente => {
        const opcion = document.createElement("option")
        opcion.value = cliente.nro_socio;
        opcion.textContent = `${cliente.nombre} ${cliente.apellido}`;
        selectCliente.appendChild(opcion);
    });
}

function recuperarAdopciones() {
    const adopcionesGuardadas = JSON.parse(
        localStorage.getItem("adopciones")
    ) || [];

    adopcionesGuardadas.forEach(registro => {
        const mascota = animales.find(
            animal => animal.idAnimal === registro.idMascota
        );

        const cliente = clientes.find(
            cliente => cliente.nro_socio === registro.nroSocio
        );

        if (mascota && cliente && mascota.duenio === null) {
            cliente.adoptar(mascota, registro.fecha);
        }
    });
}