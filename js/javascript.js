
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
benvingut(nomweb);
sumaNums(num1, num2);
