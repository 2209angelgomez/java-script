/**tipos de variables */

var name="holi";
console.log("El tipo de name es: ", typeof name);

var age=20;
console.log("El tipo de age es: ", typeof age);

var active=true;
console.log("El tipo de active es: ", typeof active);


/**conversiones numericas */

/**ingrese la edad */

var age1=parseInt(prompt("ingrese la edad"));
if(isNaN (age1)){
    alert("No es válido")
}

else{
    alert("su edad es: "+ age1);
}
alert(age1);


/**ejercicio 1 */

/*+mostrar la sumatoria y la media de los numeros introducidos por pantalla hasta que el número sea negativo*/

var sum=0;
var average=0;
var count=0;
var num=parseInt(prompt("Ingrese un número"));
while (num>0){
    count++;
    sum+=num;
    num=parseInt(prompt("Ingrese un número"));
}
