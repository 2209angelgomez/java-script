/**tipos de variables */

var name="holi";
console.log("El tipo de name es: ", typeof name);

var age=20;
console.log("El tipo de age es: ", typeof age);

var active=true;
console.log("El tipo de active es: ", typeof active);


/**conversiones numericas */

/**ingrese la edad */

/*var age1=parseInt(prompt("ingrese la edad"));
if(isNaN (age1)){
    alert("No es válido")
}

else{
    alert("su edad es: "+ age1);
}
alert(age1);
*/

/**ejercicio 1 */

/* /mostrar la sumatoria y la media de los numeros introducidos por pantalla hasta que el número sea negativo*/

/*var sum=0;
var average=0;
var count=0;
var num=25
debugger;
while (num>0){
    num=parseInt(prompt("Ingrese un número"));
    if(!isNaN(num) && num>=0){
    sum+=num;
    count++;
}
}

average=sum/count;
alert("la sumatoria es: "+ sum+ "\n"+"el promedio es: "+average);*/

/**mostrar todos los numeros que hay entre un rango inicial y un rango final suministrado por el usuario */

/*var  iRank=parseInt(prompt("Ingrese el primer valor del rango"));
var  fRank=parseInt(prompt("Ingrese el segundo número del rango"));
if(!isNaN(iRank) && !isNaN(fRank) && iRank>0 && fRank>0 && iRank<fRank){
    document.write("<h1> De " + iRank+ " hasta " + fRank + " existen los siguientes números: </h1>" )
    for (let index = iRank; index < fRank; index++) {
        console.log(index);
        document.write("<b>" + index + "</b> <br>")
        
    }
}*/


/**mostrar todos los números pares entre un rango de dos números */

/*var  iRank=parseInt(prompt("Ingrese el primer valor del rango"));
var  fRank=parseInt(prompt("Ingrese el segundo número del rango"));
if(!isNaN(iRank) && !isNaN(fRank) && iRank>0 && fRank>0 && iRank<fRank){
    document.write("<h1> De " + iRank+ " hasta " + fRank + " existen los siguientes números pares: </h1>" )
    for (let index = iRank; index < fRank; index++) {
        if(index%2==0){
        console.log(index);
        document.write("<b>" + index + "</b> <br>")
        
    }
}
}*/

/**pedir un numero por pantalla y decir cuales son los divisores de determinado numero */

/*var num1=parseInt(prompt("Digite un número")); 
if (!isNaN (num1) && num1>=0){
    document.write("<h1> Los divisores de " + num1 + "son: </h1>");
    for (let index = 0; index < num1; index++) {
        if(num1%index==0){
        document.write("<b>"+ index + "</b> <br>")
        
    }
}

}*/

/*
var num=parseInt(prompt("Ingrese un número"));
while (isNaN(num)){
    alert ("Ingrese un número");
    num=parseInt(prompt("Ingrese un número"));

}

if (num%2==0){
alert("Es par");
} 
else{
    alert("es impar");
}
*/






var user=prompt("Ingrese su usuario");
var password=parseInt(prompt("Ingrese su contraseña"));

if (user!="Angélica"){
    alert ("Nombre de usuario incorrecto");
}

if (password!=1234){
    alert ("Contraseña incorrecta");
}


else {
    alert ("Bienvenido");
}

