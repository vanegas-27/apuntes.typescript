"use strict";
(() => {
    let myVar;
    myVar = "20";
    myVar = 20;
    /**
     * una magina que nos ofrece TypeScript es que podemos controlar
     * mucho mejor los tipos de datos de los datos que resivimos
     * y manejar de diferentes maneras la variable
     */
    function myFuction(myVar) {
        if (typeof myVar === "string") {
            //en este scope solo se visualizan los metodos par un string
            myVar.toLowerCase();
        }
        else {
            //en este scope solo las de tipo number
            myVar.toString();
        }
    }
    ;
    myFuction(2);
    myFuction("hola mundo");
})();
