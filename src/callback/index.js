function sumar(num1,num2){
 return num1+num2;

}
function calcular(num1,num2, callback){
    return callback( num1,num2);
}

console.log(calcular(10,10,sumar));

function fecha(callback){
    console.log(new Date());

    setTimeout(function () {

let date = new Date();
callback(date);

    },3000);

} 

function imprimirfecha(dateNow){

console.log(dateNow);

}

fecha(imprimirfecha);