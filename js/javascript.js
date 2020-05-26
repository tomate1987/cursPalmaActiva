
// Definició de la función
function dadesPersonals(){

    //recuperam els camps del formulari per el seu id.
    var nom = document.getElementById("nom").value;
    var edat = document.getElementById("edat").value;

    // llançam un alert amb el que havia rellenat abans l'usuari.
     alert("El meu nom "+nom+ " i tenc " +edat+ " anys");


}

// Definició de la función
function sumaNums(primerNum, segundoNum) {
  var result = primerNum + segundoNum;
  alert("El resultat es sumar dues variables " + result);
}

function benvingut(valor) {
    var result1 = valor;
    alert("Benvingut a la meva web " + result1);
  }
  

// Declaració  variables
var num1 = 3;
var num2 = 5;

var nomweb= "Toni";

//Cridada a la funció sexecuta quan es carrega la pagina index.html
//benvingut(nomweb);
//sumaNums(num1, num2);


//crear 10 cotxos.
function crearCotxe(portes,color,marca,rodes)
{

  var cotxe = {
    portes : portes,
    color : color,
    marca :marca,
    rodes :rodes, 
    };

    

}
crearCotxe(4,"vermell","tesla",4);
crearCotxe(4,"Groc","renault",4);
crearCotxe(4,"negre","nissan",4);
crearCotxe(4,"vermell","ford",4);
crearCotxe(4,"rosa","ford",4);
crearCotxe(4,"vermell","nissan",4);
crearCotxe(4,"blanc","peugot",4);
crearCotxe(4,"gris","ford",4);
crearCotxe(4,"marron","renault",4);
crearCotxe(4,"morat","citroen",4);

//Constructor
function crearCotxe2(portes,color,marca,rodes) { 
	this.Portes = portes;
	this.Color = color;
	this.Marca = marca;
	this.Rodes = rodes;
}

crearCotxe2(4,"vermell","tesla",4);
crearCotxe2(4,"Groc","renault",4);
crearCotxe2(4,"negre","nissan",4);
crearCotxe2(4,"vermell","ford",4);
crearCotxe2(4,"rosa","ford",4);
crearCotxe2(4,"vermell","nissan",4);
crearCotxe2(4,"blanc","peugot",4);
crearCotxe2(4,"gris","ford",4);
crearCotxe2(4,"marron","renault",4);
crearCotxe2(4,"morat","citroen",4);

//funcio de posar dni i retorna la LEETRA
function letreDNI(dni)
    {
        var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
        var posicion = dni%23;
        var letra = cadena.substring(posicion,posicion+1);
        return letra;
    }