(() => {

/**
 * se utilizan tipos para declarar los tipos de datos que
 * podrian recibir una funcion o variable en nuestro codigo
 * y asi poder mantener el codigo mucho mas claro y no tan redundante
 *
 */
  //normalmente se utiliza PascalQueis
  type UserId = string | number | boolean;

  let myVar : UserId;

  function myFuction(myVar :UserId){

    if(typeof myVar === "string"){
      console.log("string : "+ myVar);
    }



    //literal types

    let tamaño : string;
    tamaño = "M";
    tamaño = "S";
    tamaño = "XL";
    tamaño = "XXL";
    tamaño = "ÑDLSAKDÑASL";

    //con esto hacemos mucho mas estricto los parametros que podemos recibir en cada varibale o metodo, dependiendo el caso.
    type Sizes =  "M" | "S" | "XL" | "XXL";

    let tamaño2 : Sizes;

    tamaño2 = "M";
    tamaño2 = "S"

    function tamaños(tamaño2 : Sizes){

      if(tamaño2=== "XXL"){
        // code ....
      }

    }

  }

  myVar = "hola";

  myFuction(myVar);
})();
