
$(document).ready(function () {


//crear conecxio API 
//"Hola mi nombre es Rick Sanchez, mi especie es Human, soy originario de Earth (C-137)
const API_URL = "https://rickandmortyapi.com/api/";
const PERSONATJES_URL = "character/:id";
const PERSONATJE_RICK = `${API_URL}${PERSONATJES_URL.replace(":id",1)}`;
const OPCIONS = { crossDomain :true };
const PERSONATJE = function(personatje){

 
    document.write(`hola ,mi nombre es ${personatje.name} mi especie es ${personatje.species} soy originario de ${personatje.origin.name}`);
}

$.get(PERSONATJE_RICK,OPCIONS,PERSONATJE);

});








//exemple 2 

//const API_URL = "https://rickandmortyapi.com/api/";
//const PERSONATJES_URL = "character/:id";
//const PERSONATJE_RICK = API_URL + PERSONATJES_URL.replace(":id",1);
//const OPCIONS = { crossDomain :true };
//const PERSONATJE = function(personatje){
  //  document.write('hola ,mi nombre es ' + personatje.name);
   // console.log('hola ,mi nombre es ' + personatje.name);
//}

//$.get(PERSONATJE_RICK,OPCIONS,PERSONATJE);