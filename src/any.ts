let myVar : any;
/* este tipo de fucion nos permite almacenar cualquier
tipo de variable y poder cambiar su valor durante el tiempo
*/

myVar = Boolean;
myVar = Number;
myVar = [];
myVar = {

};
// etc...

/**
 * se considera que sea obligatiorio que no se utilice el any
 * por malas practicas, pero no de todo es mala practica
 */

//para tratar a los datos de manera diferente y que nos reconozca el tipo se tiene de convertir el dato
myVar = "";
const rta = (myVar as string).length;

myVar = 123;
const rta2 = (<number> myVar).toFixed;

