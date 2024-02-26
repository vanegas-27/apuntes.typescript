(() => {


  type Product = {
    nombre : string,
    apellido : string ,
    edad : number ,
    sexo? : string
  };



  let davidson : Product = {
    nombre:"davidson",
    apellido:"vanegas",
    edad : 21,
    sexo : "masculino"
  }

  let mariana : Product = {
    nombre:"mariana",
    apellido:"tabares",
    edad : 24,
    sexo : "femenino"
  }


  //con este tipado podemos hacer los arreglos o objectos muchas mas flexibles al momento de guardar datos en ellos

  /**
   * aca le decimos que solo permita un tipo o unos tipos de datos para que mi funcion nunca falle o sea mas cuidadosa con los errores posibles
   */

  const arraySuprema :Product[] = [];

  arraySuprema.push(mariana);
  arraySuprema.push(davidson)



})();
