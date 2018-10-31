/**realizar un script que pida al usuario dos numeros, cual es el mayor y si son iguales */
/** *
var numero1=prompt("ingrese un numero");
var numero2=prompt("ingrese otro numero");

if (numero1<numero2){
    console.log ("el numero mayor es", numero2);
}
else if (numero2 > numero2){
    console.log("el numero mayor es", numero1);
    
}
else{
    console.log("los numeros son iguales");
}

hola

/**ingresar por pantalla la edad de una persona, si la èrona es mayor de 18 indicar que es mayor de 
 * edad de lo contrario es menor de edad, si tiene la edad menor o ighual a 33 escribir eres milenial 
 * si mayor p igaul a 70 eres un anciano, si es mayor o igualñ a 33 ya no eres un melinial

 var edad=prompt("ingrese una edad");

function calcularEdad(edad){



 if (edad<=17){
     console.log("es menor de edad");
 }

 else if (edad==18){
     console.log("es mayor de edad");
 }

 else if (edad<=33){
     console.log("eres un milenial")
 }

else if (edad>=70){
    console.log("eres un anciano");
}

else if(edad>=33){
    console.log("ya no eres un milenial")
}
}
debugger;
calcularEdad(edad);
calcularEdad(23);
calcularEdad(89);
calcularEdad8(15);
calcularEdad(67);


/**operadores de compración */

var a=5;
var b=5;
if (a==b){
    console.log("A es igual a B ")
}
if (a===b){
    console.log("A y B son iguales en signo y en valor")
}

else {
    console.log("No son iguales en signo y valor")
}



/**operador ternario */

var aux=0;
if (a==b){
    aux=5;
    console.log(aux);
}
else{
    aux=10;
    console.log(aux)
}

var result= a==b? 10 : 20;
console.log(result);


var year=prompt("Escriba un año");
var resultado = year != 2018? true : false;
console.log(resultado)




/**Switch */

var day=prompt("Introduzca un dìa de la semana");
function setDay(day){
switch (day){
    case "sabado":
    console.log("voy a ir al cine");
    break;

    case "domingo":
    console.log("voy hacer deporte");
    break;

    case "lunes":
    console.log("voy a trabajar");
    break;

    default:
    Console.log(" no es un dia vàlido");
}
}

setDay(day);
setDay("domingo");
setDay(13);
