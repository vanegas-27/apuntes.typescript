"use strict";
(() => {
    let myVar;
    function myFuction(myVar) {
        if (typeof myVar === "string") {
            console.log("string : " + myVar);
        }
        //literal types
        let tamaño;
        tamaño = "M";
        tamaño = "S";
        tamaño = "XL";
        tamaño = "XXL";
        tamaño = "ÑDLSAKDÑASL";
        let tamaño2;
        tamaño2 = "M";
        tamaño2 = "S";
        function tamaños(tamaño2) {
            if (tamaño2 === "XXL") {
                // code ....
            }
        }
    }
    myVar = "hola";
    myFuction(myVar);
})();
