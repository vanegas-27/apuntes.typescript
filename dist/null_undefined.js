"use strict";
(() => {
    let myNull = null; //type any
    let myUndefined = undefined; //type any
    let myNull2 = null; //type null
    let myUndefined2 = undefined; //type undefined
    let myNumber = null;
    myNumber = 2;
    function saludo(text) {
        if (text) {
            // code....
        }
        else {
            // code...
        }
    }
    function saludoV2(text) {
        let hello = "hola ";
        //esta asignacion es la actual y nos valida si existe, sino devuelve un nulo y se manejaria con el or
        hello += (text === null || text === void 0 ? void 0 : text.toLocaleLowerCase()) || "el valor es nulo";
    }
});
