//funcio comprobar dni
function comprobarPolicia(dni){

//recuperam el nom i el dni del formulari
    var nom = document.getElementById("nom").value;
    var numDNI = document.getElementById("dni").value;

    //pasam el numDni a la funcio validar per mirar si es dni mab la lletra es correcte.
 var comprobar = validar(numDNI);

 if (comprobar) {

    alert ('El Dni de ' +nom+ ' es correcte');

  

 }else {
    alert ('El Dni de ' +nom+ ' NO es correcte');
 

 }

}

// funcio validar numDni.
function validar(numDNI){

    //llevam la letra.
    var numDNISinLetra = numDNI.substring(0, 8);

    //lletres dni
    var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
    //cercam quina posicio ens torna per despres mirarla amb la lletra
    var posicion = numDNISinLetra%23;
    var letra = cadena.substring(posicion,posicion+1);

    //concatanam la lletra amb el numero de dni.
    var dni_complet =String(numDNISinLetra + letra);

    //comprobam el dni pasat per formulario amb el dni mab la seva lletra correcta.
    if(dni_complet ===numDNI){
        return true;
    }else {
        return false;
    }

}

// cambiar fondo con el dia
function cambiarfondo(x) {
    var f = document.getElementById("colores").value;
    var body = document.getElementById("body")
 body.style.backgroundColor = x.value;
}

// cambiar fondo con el dia
function aumentartamaño() {
    logo = document.getElementById("balon");
    logo.width = 400;
    logo.height = 400;
}

function disminuirtamaño() {
    logo = document.getElementById("balon");
    logo.width = 200;
    logo.height = 200;
}

   