
$(document).ready(function () {

Date.prototype.addHours = function(h) {
  this.setTime(this.getTime() + (h*60*60*1000));
  return this;
}
//addHours(afegeix hores o elimina ahores a hora actual.)
MadridHora= new Date().addHours(0).getHours()
MadridMinuts= new Date().getMinutes();
//addHours(afegeix hores o elimina ahores a hora actual.)
LondesHora= new Date().addHours(-1).getHours()
LondresMinuts= new Date().getMinutes();
//addHours(afegeix hores o elimina ahores a hora actual.)
AngelesHora= new Date().addHours(-9).getHours()
AngelesMinuts= new Date().getMinutes();
//addHours(afegeix hores o elimina ahores a hora actual.)
NewYorkHora= new Date().addHours(-6).getHours()
NewYorkMinuts= new Date().getMinutes();
//addHours(afegeix hores o elimina ahores a hora actual.)
SidneyHora= new Date().addHours(8).getHours()
SidneyMinuts= new Date().getMinutes();


document.getElementById('rellotja').innerHTML=MadridHora +":" + MadridMinuts;
document.getElementById('rellotja1').innerHTML=LondesHora +":" + LondresMinuts;
document.getElementById('rellotja2').innerHTML=AngelesHora +":" + AngelesMinuts;
document.getElementById('rellotja3').innerHTML=NewYorkHora +":" + NewYorkMinuts;
document.getElementById('rellotja4').innerHTML=SidneyHora +":" + SidneyMinuts;
    

});


//funcio per afegir un nou pais
function afegirPais(){
  var pais = prompt("Nom Pais:");
  var hores = prompt("Diferencia Hores Madrid:");

//recuperam la nova hora i afegim o elimina hores amb el camp que hem elegit abans.
//addHours(afegeix hores o elimina ahores a hora actual.)
  NouHora= new Date().addHours(hores).getHours()
  NouMinuts= new Date().getMinutes();

  //pintam el nom a dins un div
  document.getElementById('nomPais').innerHTML=pais;
  document.getElementById('rellotja5').innerHTML=NouHora +":" + NouMinuts;


}





