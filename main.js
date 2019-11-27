let usuarios = [
    [0, "Carla", 1545628984, "carla@gmail.com"],
    [1, "Pedro", 1545251245, "pedro@gmail.com"],
    [2, "Lucas", 1523357849, "lucas@gmail.com"],
    [3, "Ana", 15789456, "ana@gmail.com"]
];

console.table(usuarios); // Idem a console.log, la info se muestra como una tabla, queda más legible, nada mas.

let nombre = "";
let telefono = "";
let email = "";
let id = usuarios.length;

let repetirOperacion = "";

let accion = prompt(`SELECCIONE UNA OPERACION
-------------------------
[AGREGAR] un usuario
[OBTENER] un usuario
[LISTAR] todos los usuarios
[MODIFICAR] un usuario
[ELIMINAR] un usuario
[SALIR] del programa`)


if (accion === "AGREGAR") {
    nombre = prompt("Ingrese el nombre del usuario");
    telefono = prompt("Ingrese el teléfono del usuario");
    email = prompt("Ingrese el email del usuario");
};

let datosNuevoUsuario = [id, nombre, Number(telefono), email]

console.log(datosNuevoUsuario)

let confirmacion = prompt(`Has ingresado los siguientes datos

NOMBRE: ${nombre} 
TELEFONO: ${telefono}
EMAIL: ${email}
-------------------------
¿Desea confirmar esta operacion?`)

if (confirmacion === "SI") {
    alert("Operación realizada exitosamente")
    usuarios.push(datosNuevoUsuario)

}
else {
    alert("La operación no se ha realizado")
}

console.table(usuarios)

repetirOperacion = prompt("¿Desea repetir la operación? (SI/NO)")



