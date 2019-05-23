j = 0;
k = 0;
m = 0;
n = 0;
//Funcion que recorre todos los elementos del formulario para validar si los campos estas llenos
function validarCamposObligatorio() {
    var bandera = false;
    for (var i = 0; i < document.forms[0].length; i++) {
        var elemento = document.forms[0].elements[i];
        if (elemento.value.trim() == '') {

            if (elemento.id == 'cedula') {
                elemento.style.border = "1px red solid"
                document.getElementById('mensajeCedula').innerHTML = "La cedula es obligatoria."
            }
            if (elemento.id == 'nombres') {
                elemento.style.border = "1px red solid"
                document.getElementById('mensajeNombre').innerHTML = "Por favor ingrese por lo menos un nombre."
            }

            if (elemento.id == 'apellidos') {
                elemento.style.border = "1px red solid"
                document.getElementById('mensajeApellido').innerHTML = "Por favor ingrese por lo menos un apellido."
            }

            if (elemento.id == 'direccion') {
                elemento.style.border = "1px red solid"
                document.getElementById('mensajeDireccion').innerHTML = "Ingrese su direccion."
            }

            if (elemento.id == 'telefono') {
                elemento.style.border = "1px red solid"
                document.getElementById('mensajeTelefono').innerHTML = "El numero de telefono es obligatorio"
            }
            if (elemento.id == 'fechaNacimiento') {
                elemento.style.border = "1px red solid"
                document.getElementById('mensajeFecha').innerHTML = "La fecha de nacimiento es obligatoria."
            }

            if (elemento.id == 'correo') {
                elemento.style.border = "1px red solid"
                document.getElementById('mensajeCorreo').innerHTML = "El correo es obligatorio."
            }
            bandera = true;
        }
    }
    if (bandera) {
        alert('Llenar todos los campos')
        return false
    } else {
        return true

    }
}

//Funcion para validar que solo se ingrese numeros en la cedula.
function validarNumerosCed(elemento) {
    //Obtiene el valor en codigo Ascii de la tecla presionada
    valorAscii = elemento.value[j].charAt().charCodeAt();
    //Validacion para que la tecla ingresada sea un numero
    if (valorAscii >= 48 && valorAscii <= 57) {
        j++;
        return true;
    } else {
        //Cuando se ingresa un caracter distinto a un numero entonces lanza un error y se elimina la tecla presionada
        alert('Ingrese unicamente numeros.');
        var corte = elemento.value.substring(0, j);
        elemento.value = corte;
        return false;
    }
}

//Funcion para validar que solo se ingrese numeros en el telefono.
function validarNumerosTel(elemento) {
    //Obtiene el valor en codigo Ascii de la tecla presionada
    valorAscii = elemento.value[k].charAt().charCodeAt();
    //Validacion para que la tecla ingresada sea un numero
    if (valorAscii >= 48 && valorAscii <= 57) {
        k++;
        return true;
    } else {
        //Cuando se ingresa un caracter distinto a un numero entonces lanza un error y se elimina la tecla presionada
        alert('Ingrese unicamente numeros.');
        var corte = elemento.value.substring(0, k);
        elemento.value = corte;
        return false;
    }
}

//Funcion para validar que solo se ingrese letras Nombre.
function validarLetrasNom(elemento) {
    //Obtiene el valor en codigo Ascii de la tecla presionada
    valorAscii = elemento.value[m].charAt().charCodeAt();
    //Validacion para que la tecla ingresada sea un numero
    if (valorAscii >= 65 && valorAscii <= 90 || valorAscii >= 97 && valorAscii <= 122 || valorAscii == 32) {
        m++;
        return true;
    } else {
        //Cuando se ingresa un caracter distinto a un numero entonces lanza un error y se elimina la tecla presionada
        alert('Ingrese unicamente letras.');
        var corte = elemento.value.substring(0, m);
        elemento.value = corte;
        return false;
    }
}

//Funcion para validar que solo se ingrese letras Apellido.
function validarLetrasApe(elemento) {
    //Obtiene el valor en codigo Ascii de la tecla presionada
    valorAscii = elemento.value[n].charAt().charCodeAt();
    //Validacion para que la tecla ingresada sea un numero
    if (valorAscii >= 65 && valorAscii <= 90 || valorAscii >= 97 && valorAscii <= 122 || valorAscii == 32) {
        n++;
        return true;
    } else {
        //Cuando se ingresa un caracter distinto a un numero entonces lanza un error y se elimina la tecla presionada
        alert('Ingrese unicamente letras.');
        var corte = elemento.value.substring(0, n);
        elemento.value = corte;
        return false;
    }

}

function validarCedula() {
    var ciCaja = document.forms[0].elements[0];
    var ci = document.forms[0].elements[0].value;
    var sum = 0;
    var digVal = 0;
    var bandera = false;
    if (ci.length <= 10) {
        v1 = ci[0] + ci[1];
        if (v1 > 0 && v1 <= 24) {
            for (var i = 0; i < ci.length - 1; i++) {

                if (i % 2 == 0) {

                    valDigito = ci[i] * 2;
                }
                else {
                    valDigito = ci[i] * 1;
                }
                if (valDigito >= 10) {
                    valDigito = valDigito - 9;
                }
                sum = sum + valDigito;
            }
            digVal = (Math.round(sum / 10)) * 10;
            if ((digVal - sum) == ci[9]) {
                bandera = true;
            }
            else {
                ciCaja.style.border = "1px red solid"
                document.getElementById('mensajeCedula').innerHTML = "Cedula Incorrecta."
            }
        }
    }
    return bandera;
}

function validarFecha() {
    var f = new Date();
    var anioimp = f.getFullYear();
    var fecha = document.forms[0].elements[5].value;
    var feCaja = document.forms[0].elements[5];
    var dia = fecha[0] + fecha[1];
    var mes = fecha[3] + fecha[4];
    var anio = fecha[6] + fecha[7] + fecha[8] + fecha[9];
    var bandera3 = false;
    if (fecha.length == 10) {
        if (fecha[2] === "/" && fecha[5] === "/") {
            if (dia > 0 && dia <= 31 && mes > 0 && mes <= 24 && anio <= anioimp) {
                bandera3 = true;
            }
            else {
                feCaja.style.border = "1px red solid"
                document.getElementById('mensajeFecha').innerHTML = "Fecha Incorrecta."
            }
        }
    }

    return bandera3;

}

function validarCorreo() {
    var elemento = document.forms[0].elements[6].value;

    var elCaja = document.forms[0].elements[6];
    elemento = elemento.trim();
    var bandera4 = false;
    for (var p = 0; p <= elemento.length; p++) {
        if (elemento[p] == "@") {
            direccion = elemento.substring(0, p);
            dominio = elemento.substring(p + 1, elemento.length);
            break;
        }
        else {
            if (p == elemento.length) {
                alert('Ingrese un formato valido: "ejemplo@est.ups.edu.ec o ejemplo@ups.edu.ec"');
            }
        }
    }
    if (direccion.length >= 3 && dominio === "est.ups.edu.ec" || dominio === "ups.edu.ec") {
        bandera4 = true;
    }
    else {
        elCaja.style.border = "1px red solid"
        document.getElementById('mensajeCorreo').innerHTML = "Correo Incorrecto."
    }
    return bandera4;



}

function validar2Nombres() {

    var contador = 0;
    var cadena = document.forms[0].elements[1].value.trim();
    var nomCaja = document.forms[0].elements[1];
    var bandera5 = false;
    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i].charAt().charCodeAt() == 32) {
            contador = contador + 1;
        }
    }
    if (contador == 1) {
        bandera5 = true;
    }
    else {
        nomCaja.style.border = "1px red solid"
        document.getElementById('mensajeNombre').innerHTML = "Ingrese 2 nombres."
    }
    return bandera5;

}

function validar2Apellidos() {

    var contador = 0;
    var cadena = document.forms[0].elements[2].value.trim();
    var apeCaja = document.forms[0].elements[2];
    var bandera6 = false;
    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i].charAt().charCodeAt() == 32) {
            contador = contador + 1;
        }
    }
    if (contador == 1) {
        bandera6 = true;
    }
    else {
        apeCaja.style.border = "1px red solid"
        document.getElementById('mensajeApellido').innerHTML = "Ingrese 2 apellidos."
    }
    return bandera6;
}

//Variable para validar la entrada de numeros Cedula
//j=0;
//Variable para validar la entrada de numeros Telefono
//k=0;
//Variable para validar la entrada de letras tanto minusculas como mayusculas Nombre
//m=0;
//Variable para validar la entrada de letras tanto minusculas como mayusculas Apellido
//n=0;
