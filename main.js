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
let opcionDeBusqueda = "";
let accion = "";

let id = usuarios.length;

while (accion.toUpperCase() !== "SALIR") {

    // Verifico si esta vacio, ya que si es la primera vez, le tiene que preguntar que quiere hacer,
    // sino, significa que esta repitiendo alguna acción.
    if (accion === "") {
        accion = prompt(`SELECCIONE UNA OPERACION
        -------------------------
        [AGREGAR] un usuario
        [OBTENER] un usuario
        [LISTAR] todos los usuarios
        [MODIFICAR] un usuario
        [ELIMINAR] un usuario
        [SALIR] del programa`).toUpperCase();
    }

    if (accion === "AGREGAR") {

        nombre = prompt("Ingrese el nombre del usuario");
        telefono = prompt("Ingrese el teléfono del usuario");
        email = prompt("Ingrese el email del usuario");

        // Verifico que el usuario haya ingresado todos los datos, sino vamos a quedarnos con información inconsistente.
        if (nombre == "" || telefono == "" || email == "") {

            alert(`Uno o mas datos del nuevo usuario está/n vacios, por favor vuelva a ingresarlos`);

        } else {
            let primerLetraMayus = nombre.charAt(0).toUpperCase();
            let restoNombreMin = nombre.slice(1, nombre.length);
            let nombreFormateado = primerLetraMayus + restoNombreMin;

            let datosNuevoUsuario = [id, nombreFormateado, Number(telefono), email.toLowerCase()];

            console.log(datosNuevoUsuario);

            let confirmacion = prompt(`
                Has ingresado los siguientes datos:
    
                NOMBRE: ${nombreFormateado} 
                TELEFONO: ${telefono}
                EMAIL: ${email}
                -------------------------;
                ¿Desea confirmar esta operacion? 
                SI
                NO`).toUpperCase();

            if (confirmacion === "SI") {

                alert("Operación realizada exitosamente");
                usuarios.push(datosNuevoUsuario);
                console.table(usuarios);
                // Actualizamos el indice, así sirve para el proximo usuario, sino se repetían.
                id = usuarios.length;

                confirmacion = prompt(`¿Desea repetir la operación? 
                    SI
                    NO`).toUpperCase();

                if (confirmacion === "NO") {
                    accion = "";
                } else if (confirmacion !== "SI") {
                    //  Si escribió cualquier cosa le indicamos que no es una opción valida.
                    alert(`Opción inválida`);
                }

            } else {
                alert("La operación no se ha realizado");
            }
        }
    } else if (accion === "OBTENER") {

        opcionDeBusqueda = prompt(`
            ----------------------------------
            Seleccione una opcion de busqueda
            ----------------------------------
            ID
            NOMBRE
            TELEFONO
            EMAIL`).toUpperCase();

    } else if (accion === "MODIFICAR") {

        let idAMmodificar = Number(prompt(`Ingrese el id del usuario a modificar`));

        // Empiezo a recorrer el primer array, que tiene toda la info
        for (let i = 0; i < usuarios.length; i++) {

            // Empiezo a recorrer la info dentro del primer array, de izq a derecha (indice, nombre, telefono, mail)
            for (let j = 0; j < usuarios[i].length; j++) {

                if (usuarios[i][j] === idAMmodificar) {

                    let nombreNuevo = prompt("Ingrese el nuevo nombre del usuario");
                    let telefonoNuevo = prompt("Ingrese el nuevo teléfono del usuario");
                    let emailNuevo = prompt("Ingrese el nuevo email del usuario");

                    // Verifico que el usuario haya ingresado todos los datos nuevos para el usuario, sino vamos a quedarnos con información inconsistente.
                    if (nombreNuevo == "" || telefonoNuevo == "" || emailNuevo == "") {

                        alert(`Uno o mas datos del nuevo usuario está/n vacios, por favor vuelva a ingresarlos`);

                    } else {
                        let primerLetraMayus = nombreNuevo.charAt(0).toUpperCase();
                        let restoNombreMin = nombreNuevo.slice(1, nombreNuevo.length);
                        let nombreNuevoFormateado = primerLetraMayus + restoNombreMin;

                        let datosUsuarioModificado = [idAMmodificar, nombreNuevoFormateado, Number(telefonoNuevo), emailNuevo.toLowerCase()];

                        console.log(datosUsuarioModificado);

                        let confirmacion = prompt(`
                            Has ingresado los siguientes datos:
                
                            NOMBRE: ${nombreNuevoFormateado} 
                            TELEFONO: ${telefonoNuevo}
                            EMAIL: ${emailNuevo}
                            -----------------------------------
                            ¿Desea confirmar esta operacion? 
                            SI
                            NO`).toUpperCase();

                        if (confirmacion === "SI") {

                            alert("Operación realizada exitosamente");
                            usuarios[i] = datosUsuarioModificado;
                            console.table(usuarios);

                            confirmacion = prompt(`¿Desea repetir la operación? 
                            SI
                            NO`).toUpperCase();

                            if (confirmacion === "NO") {
                                accion = "";
                            } else if (confirmacion !== "SI") {
                                //  Si escribió cualquier cosa le indicamos que no es una opción valida.
                                alert(`Opción inválida`);
                            }

                        } else {
                            alert("La operación no se ha realizado");
                        }
                    }
                }
            }
        }

    } else {

        // Pudo haber escrito salir, verificamos primero si es diferente de salir, para avisarle que deje la michelada
        if (accion !== "SALIR") {

            alert(`
            Opción inválida
            Por favor, ingrese una opción correcta`);
            accion = "";

        } else {

            // Si escribió SALIR, verificamos que realmente quiera salir.            
            let confirmacion = prompt(`
                ¿Desea confirmar esta operación?
                SI
                NO`).toUpperCase();

            if (confirmacion === "SI") {

                alert("Hasta pronto");

            } else if (confirmacion !== "NO") {

                // Si le pifió al SI o NO cuando quiso confirmarque VERDADERAMENTE quería salir (o no), le indicamos que es una opción invalida y que vuelva a ingresar que quiere hacer.

                alert(`
                Opción inválida
                Por favor, ingrese una opción correcta`);

                accion = ""; // Si no blanqueamos la acción, como en este momento es igual a SALIR, el while verifica que es no es difrente de SALIR y finaliza la operación.

            } else {
                /* Si escribió NO, significa que no quiere salir y que quiere seguir usando la "aplicación", por eso tenemos que blanquear la acción.
                Si no blanqueamos la acción, al ser SALIR, el while verifica que es no es !== SALIR y finaliza.*/
                accion = "";
            }
        }
    }
}