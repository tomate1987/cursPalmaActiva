function jugar()
{
var pedra = 0;
var paper = 1;
var estisores = 2;

//Genera un número aleatorio entre un rango de enteros
function numAleatoris(minim, maxim)
{
    var numero = Math.floor( Math.random() * (maxim - minim + 1) + minim );
    return numero;
}


var opcions = ["Pedra", "Paper", "estisores"];

var opcionUsuario  = document.getElementById("joc").value;
var opcionMaquina = numAleatoris(0,2);


alert("Has triat " + opcions[opcionUsuario]);
alert("La maquina a triat  " + opcions[opcionMaquina]);


if(opcionUsuario == pedra)
{
    if(opcionMaquina == paper)
    {
        alert("Heu empatat!");
    }
    else if(opcionMaquina == paper)
    {
        alert("Has perdut :( ");
    }
    else if(opcionMaquina == estisores)
    {
        alert("Has guanyat!");
    }
}
else if(opcionUsuario == paper)
{
    if(opcionMaquina == pedra)
    {
        alert("Has guanyat!");
    }
    else if(opcionMaquina == paper)
    {
        alert("Heu empatat!");
    }
    else if(opcionMaquina == estisores)
    {
        alert("Has perdut!");
    }
}
else if(opcionUsuario == estisores)
{
    if(opcionMaquina == pedra)
    {
        alert("Has perdut!");
    }
    else if(opcionMaquina == paper)
    {
        alert("Has guanyat!");
    }
    else if(opcionMaquina == estisores)
    {
        alert("Heu empatat!");
    }
}


}



