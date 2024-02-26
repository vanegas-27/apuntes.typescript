(() => {

  //con el ? se puede hacer una parametro vacio por decir, que no sea obligatorio pasarlo
  type Sizes =  "M" | "S" | "XL" | "XXL";

  function objecto(
    nombre : string,
    apellido : string,
    edad : number,
    size?: Sizes
  ){
    return {
      nombre,
      apellido,
      edad,
      size
    }
  }

  console.log(objecto("davidson","vanegas",21));


  //return void

  /**
   * si se desea delcarar que se debe retorna para que no lo infiera
   * se ele especifica con : al final de los parametros
   *
   * function suma(num1 : number,num2 : number): number{
   *
   *  suma = num1 + num2
   *
   *  return suma
   * }
   *
   * const suma = (num1:number, num2:number) :string => {
   *
   *    const rel = num1 + num2;
   *
   *    return rel.toString();
   * }
   */

  function saludar (nombre : string ) :string {
    return `Hola, soy ${nombre}, estoy en TypeScript...`;
  }

  console.log(saludar("davidson"));

  const rel = (num1 : number , num2:number) :number => num1 + num2;
  console.log(rel);


  function saludo(nombre : string) :void {
    console.log(`hola ${nombre}`);
  }

  saludo("davidson");


})();
