//**pedir datos por teclado*/

var nombre = prompt("Ingrese su nombre");
console.log("Este es mi nombre", nombre);
alert(nombre);
var edada= prompt("Ingrese su edad");
console.log("Esta es mi edad", edada);
alert(edada);

//**variables numèricas */
var num = 5;
console.log("num", num)

/** variables de texto*/
var palabras ="palabras";
console.log("palabras", palabras);

/**variables booleanas */
var activo = true;
console.log("activo", activo);

/**variables tipo aarreglo */
var colores = ["re", "cryan", activo, num];
console.log("colores", colores);

/**variables tipo objeto u object */
var vehiculo ={
    tipo:"automovil",
    modelo:2018,
    usado:true
};
console.log("vehiculo", vehiculo);
console.log("tipo de vehiculo",vehiculo.tipo)




/**diferencias entre var y let */
var apellido ="lola";
console.log("apellido", apellido);
apellido=14;
console.log("apellido numerico", apellido)
if(true){
    apellido="Gòmez";
    console.log("apellido dentro del if", apellido)
}
console.log("apellido fuera del if" ,apellido);

var cantidad =34;
console.log("cantidad num", cantidad);
if(true){
    let cantidad=69;
    console.log("cantidad dentro del if", cantidad);
}
console.log("cantidad fuera del if", cantidad)


/**constantes */
const edad;
edad = 20;
console.log("edad cons", edad)

/**concatenacion de variables */
var anio=2018;
var promedio ="25";
console.log("la concatenacion de"+anio+"y"+promedio+"es", anio+Number (promedio));
let numero1=25;
let numero2=40;
console.log("la concatenacion es", String (numero1)+ String (numero2));


/**ventanas */
/**alertas */
alert("la contatenacion es" + String (numero1) + String(numero2));
/**prom*/
var modelo= prompt ("el modelo del carro es", 0);
/**confirmar */
var conf= confirm ("desea salir de la aplicaciòn?");
console.log("confirmación ", conf)
