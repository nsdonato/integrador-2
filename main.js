// Observaciones generales

// Codigo prolijo, claro, excelente indentacion, buenos nombres de variables. 
// Recuerden siempre borrar los comentarios y los console log, estos son utiles para la fase de desarrollo
// pero no deberia verlos un usuario (o un profe!) a menos que tengan un proposito especifico.

// Les deje comentarios a lo largo del codigo, pero son detalles
// Realmente este es un trabajo excelente. 
// Felicitaciones!

let usuarios = [
    ["0", "Carla", "1545628984", "carla@gmail.com"],
    ["1", "Pedro", "1545251245", "pedro@gmail.com"],
    ["2", "Lucas", "1523357849", "lucas@gmail.com"],
    ["3", "Ana", "15789456", "ana@gmail.com"]
];


// Recuerden borrar los console.log (o table) antes de entregar un trabajo. 
// No es buena practica dejarlos en el codigo. 

console.table(usuarios); // Idem a console.log, la info se muestra como una tabla, queda más legible, nada mas.

let nombre = "";
let telefono = "";
let email = "";
let accion = "";

// Noto que descubrieron que tenian que aumentar el indice cada vez que agregaron un usuario
// Una vez que una variable se declara con un valor, queda ese valor declarado
// En este caso, al momento de declarar esta variable, usuarios.length era 4
// "id" siempre va a valer 4, aunque despues usuarios.length aumente, 
// a menos que, como hicieron ustedes, actualice su valor mas adelante
// Para evitar confusiones, yo la declararia vacia inicialmente. 
let id = usuarios.length;

while (accion.toUpperCase() !== "SALIR") {
    // debugger;
    // Verifico si esta vacio, ya que si es la primera vez, le tiene que preguntar que quiere hacer,
    // sino, significa que esta repitiendo alguna acción.
    if (accion === "") {
        // Esto queda horrible acá, pero visualmente esta bien centrado!
        accion = prompt(` --------------------------------------------
⚙️ SELECCIONE UNA OPERACIÓN
--------------------------------------------
➡️ [AGREGAR] un usuario 👤
➡️ [OBTENER] un usuario 🔎
➡️ [LISTAR] todos los usuarios 📄
➡️ [MODIFICAR] un usuario ✏️
➡️ [ELIMINAR] un usuario 🗑️
➡️ [SALIR] del programa 🚪`)

// una manera mas breve de hacer esto mismo seria
//      if (!accion) {
        if (accion != null && accion != "") {
            accion.toUpperCase();
        }
    }

    if (accion.toUpperCase() === "AGREGAR") {

        nombre = prompt("👤 Ingrese el nombre del usuario");
        telefono = prompt("☎️ Ingrese el teléfono del usuario");
        email = prompt("📧 Ingrese el email del usuario");

        // Verifico que el usuario haya ingresado todos los datos, sino vamos a quedarnos con información inconsistente.

        // manera mas breve:
        // if (!nombre || !telefono || !email)
        if (nombre == "" || telefono == "" || email == "" || nombre == null || telefono == null || email == null) {

            alert(`⚠️ Uno o mas datos del nuevo usuario está/n vacios, por favor vuelva a ingresarlos`);

        } else {

            // esta muy bien esto, para guardar los datos lindos
            // pero si la persona escribe todo en mayusculas, no sirve
            // le cambiaria esto:
            // let restoNombreMin = nombre.slice(1, nombre.length).toLowerCase()
            let primerLetraMayus = nombre.charAt(0).toUpperCase();
            let restoNombreMin = nombre.slice(1, nombre.length);
            let nombreFormateado = primerLetraMayus + restoNombreMin;

            let datosNuevoUsuario = [String(id), nombreFormateado, telefono, email.toLowerCase()];

            console.log(datosNuevoUsuario);

            let confirmacion = prompt(`
🗃️ Has ingresado los siguientes datos:

👤 NOMBRE: ${nombreFormateado} 
☎️ TELEFONO: ${telefono}
📧 EMAIL: ${email}
----------------------------------------------
⚠️ ¿Desea confirmar esta operacion? 

✅ SI
❌ NO`).toUpperCase();

            if (confirmacion.toUpperCase() === "SI") {

                alert("✅ Operación realizada exitosamente");
                usuarios.push(datosNuevoUsuario);
                console.table(usuarios);
                // Actualizamos el indice, así sirve para el proximo usuario, sino se repetían.
                id = usuarios.length;

                confirmacion = prompt(`🔄 ¿Desea repetir la operación? (SI/NO)`).toUpperCase();

                if (confirmacion === "NO") {
                    accion = "";
                } else if (confirmacion !== "SI") {
                    //  Si escribió cualquier cosa le indicamos que no es una opción valida.
                    alert(`
                    🚫 Opción inválida
                    🙏 Por favor, ingresar una opción correcta`);
                }
            } else {
                alert("❌ La operación no se ha realizado");
                accion = "";
            }
        }

    }

    else if (accion.toUpperCase() === "LISTAR") {
        let cadena = "";
        for (let i = 0; i < usuarios.length; i++) {
            cadena += `
                       🆔 ID: ${usuarios[i][0]} 
                       👤 NOMBRE: ${usuarios[i][1]};
                       ----------------------
                       `;
        }

        alert(cadena);
        accion = "";
    }

    else if (accion.toUpperCase() === "OBTENER") {

        let opcionDeBusqueda = prompt(`---------------------------------------------
🔎 Seleccione una opcion de búsqueda
---------------------------------------------
🆔 ID
👤 NOMBRE
☎️ TELEFONO
📧 EMAIL`).toUpperCase();

        if (opcionDeBusqueda == "ID" || opcionDeBusqueda == "NOMBRE" || opcionDeBusqueda == "TELEFONO" || opcionDeBusqueda == "EMAIL") {
            let ValorABuscar = prompt(`📝 Ingrese el valor de ${opcionDeBusqueda} a buscar`)
            ValorABuscar.toLowerCase()
            let primerLetraMayus = ValorABuscar.charAt(0).toUpperCase();
            let restoNombreMin = ValorABuscar.slice(1, ValorABuscar.length);
            ValorABuscar = primerLetraMayus + restoNombreMin;


            // el codigo aca esta muy bien, pero no hay alternativa en caso de que no se encuentre el valor buscado
            // si por ejemplo pongo un ID que no existe, me pregunta si quiero repetir la operacion
            // una respuesta que podria ser confusa 
            for (let i = 0; i < usuarios.length; i++) {
                for (let j = 0; j < usuarios[i].length; j++) {

                    if (usuarios[i][j] === ValorABuscar) {
                        alert(`
                        🆔 ID: ${usuarios[i][0]}
                        👤 NOMBRE: ${usuarios[i][1]}
                        ☎️ TELEFONO: ${usuarios[i][2]}
                        📧 EMAIL: ${usuarios[i][3]}`)
                    }
                }
            }
            let confirmacion = prompt(`🔄 ¿Desea repetir la operación? (SI/NO)`).toUpperCase();

            if (confirmacion === "NO") {
                accion = "";
            } else if (confirmacion != "SI") {
                alert(`
                🚫 Opción inválida
                🙏 Por favor, ingrsar una operación correcta`);
            }
        }
    }

    else if (accion.toUpperCase() === "LISTAR") {
        let cadena = "";
        for (let i = 0; i < usuarios.length; i++) {
            cadena += `
               🆔 ID: ${usuarios[i][0]} 
               👤 NOMBRE: ${usuarios[i][1]};
               ----------------------
               `;
        }

        alert(cadena);
        accion = "";
    }

    else if (accion.toUpperCase() === "MODIFICAR") {

        let idAMmodificar = prompt(`📝 Ingrese el id del usuario a modificar`);
        let usuarioEncontrado = ""

        // Empiezo a recorrer el primer array, que tiene toda la info
        for (let i = 0; i < usuarios.length; i++) {

            // Empiezo a recorrer la info dentro del primer array, de izq a derecha (indice, nombre, telefono, mail)
            for (let j = 0; j < usuarios[i].length; j++) {

                if (usuarios[i][j] === idAMmodificar) {

                    usuarioEncontrado = true;
                    let nombreNuevo = prompt("👤 Ingrese el nuevo nombre del usuario");
                    let telefonoNuevo = prompt("☎️ Ingrese el nuevo teléfono del usuario");
                    let emailNuevo = prompt("📧 Ingrese el nuevo email del usuario");

                    // Verifico que el usuario haya ingresado todos los datos nuevos para el usuario, sino vamos a quedarnos con información inconsistente.
                    if (nombreNuevo == "" || telefonoNuevo == "" || emailNuevo == "") {
                            // excelente esta validacion 
                        alert(`⚠️ Uno o mas datos del nuevo usuario está/n vacios, por favor vuelva a ingresarlos`);

                    } else {
                        let primerLetraMayus = nombreNuevo.charAt(0).toUpperCase();
                        let restoNombreMin = nombreNuevo.slice(1, nombreNuevo.length);
                        let nombreNuevoFormateado = primerLetraMayus + restoNombreMin;

                        // ojo aca, estan guardando telefono como Number, cuando en todos los demas casos
                        // guardan telefono como un string. 
                        let datosUsuarioModificado = [idAMmodificar, nombreNuevoFormateado, Number(telefonoNuevo), emailNuevo.toLowerCase()];

                        console.log(datosUsuarioModificado);

                        let confirmacion = prompt(`
                            🗃️ Los nuevos datos del usuario son:
                
                            👤 NOMBRE: ${nombreNuevoFormateado} 
                            ☎️ TELEFONO: ${telefonoNuevo}
                            📧 EMAIL: ${emailNuevo}
                            -----------------------------------
                            ⚠️ ¿Desea confirmar esta operacion? 
                            ✅ SI
                            ❌ NO`).toUpperCase();

                        if (confirmacion === "SI") {

                            alert("✅ Operación realizada exitosamente");
                            usuarios[i] = datosUsuarioModificado;
                            console.table(usuarios);

                            let confirmacion = prompt(`🔄 ¿Desea repetir la operación? (SI/NO)`).toUpperCase();

                            if (confirmacion === "NO") {
                                accion = "";
                            } else if (confirmacion !== "SI") {
                                //  Si escribió cualquier cosa le indicamos que no es una opción valida.
                                alert(`
🚫 Opción inválida
🙏 Por favor, ingresar una operación correcta`);
                            }

                        } else {
                            alert("❌ La operación no se ha realizado");
                        }
                    }
                }
            }
        }
        if (usuarioEncontrado == false) {
            alert(`😞 Usuario no encontrado`);
        }
    }

    else if (accion.toUpperCase() === "ELIMINAR") {

        let idUsuarioAEliminar = prompt("📝 Ingrese el id del usuario a eliminar")
        let usuarioEncontrado = ""

        for (let i = 0; i < usuarios.length; i++) {
            for (let j = 0; j < usuarios[i].length; j++) {

                // esto es un detalle, pero el prompt me pide id, sin embargo el codigo
                // borra si encuentra un match en cualquier campo
                // caso hipotetico: si alguien tiene de telefono el mismo numero que el id
                // de un usuario, el codigo me mostraria para borrar al primero que encuentre
                // entre ellos

                if (idUsuarioAEliminar === usuarios[i][j]) {

                    usuarioEncontrado = true;
                    let confirmacion = prompt(`
                    🗃️ Los datos del usuario seleccionado son:
                    👤 NOMBRE: ${usuarios[i][1]} 
                    ☎️ TELEFONO: ${usuarios[i][2]}
                    📧 EMAIL: ${usuarios[i][3]}
                    -----------------------------------
                    ⚠️ ¿Desea confirmar esta operacion? 
                    ✅ SI
                    ❌ NO`).toUpperCase();

                    if (confirmacion === "SI") {

                        alert("✅ Operación realizada exitosamente");
                        console.log(usuarios[i])
                        usuarios.splice(i, 1);
                        let confirmacion = prompt(`🔄 ¿Desea repetir la operación? (SI/NO)`).toUpperCase();

                        if (confirmacion === "NO") {
                            accion = ""
                            
                        } else if (confirmacion !== "SI") {
                            alert(`
                            🚫 Opción inválida
                            🙏 Por favor, ingresar una operación correcta`)
                        }
                        break;
                    } else {
                        alert("❌ La operación no se ha realizado");

                        let confirmacion = prompt(`🔄 ¿Desea repetir la operación? (SI/NO)`).toUpperCase();

                        if (confirmacion === "NO") {
                            accion = "";
                            break;
                        } else if (confirmacion !== "SI") {
                            alert(`
                            🚫 Opción inválida
                            🙏 Por favor, ingresar una operación correcta`);
                        }  else if (confirmacion === "SI"){
                            
                            if(usuarios.length == 0){
                                alert(`La operación no puede repetirse, todos los usuarios fueron eliminados`);
                                accion = "";
                                break;
                            }
                        }
                        
                    }
                }
            }
            if(usuarioEncontrado == true){
                break;
            }
        }
        if (usuarioEncontrado == false) {
            alert(`😞 Usuario no encontrado`);
        }
    }


    else {

        // Pudo haber escrito salir, verificamos primero si es diferente de salir, para avisarle que deje la michelada
        if (accion !== "SALIR" || accion == "" || accion == null) {

            alert(`
                🚫 Opción inválida
                🙏 Por favor, ingrese una opción correcta`);
            accion = "";

        } else {

            // Si escribió SALIR, verificamos que realmente quiera salir.            
            let confirmacion = prompt(`
            ⚠️ ¿Desea confirmar esta operación?
            ✅ SI
            ❌ NO`).toUpperCase();

            if (confirmacion === "SI") {

                alert("👋 Hasta pronto");

            } else if (confirmacion !== "NO") {

                // Si le pifió al SI o NO cuando quiso confirmarque VERDADERAMENTE quería salir (o no), le indicamos que es una opción invalida y que vuelva a ingresar que quiere hacer.
                alert(`
        🚫 Opción inválida
                    🙏 Por favor, ingrese una opción correcta`);

                accion = ""; // Si no blanqueamos la acción, como en este momento es igual a SALIR, el while verifica que es no es difrente de SALIR y finaliza la operación.

            } else if (confirmacion == "NO") {
                /* Si escribió NO, significa que no quiere salir y que quiere seguir usando la "aplicación", por eso tenemos que blanquear la acción.
                        Si no blanqueamos la acción, al ser SALIR, el while verifica que es no es !== SALIR y finaliza.*/
                accion = "";
            } else {
                accion = "";
            }
        }
    }
}
