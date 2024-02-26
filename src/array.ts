type ArrayVa = (number | string | boolean)[];
let array: ArrayVa = [];

array.push(20);

array = [1,2,3,4,5,"hola mundo",true];

function perGustos(gusto: ArrayVa, habilidades : number[]){

  console.log(gusto ,habilidades)

}

perGustos([1,2,"hola",true],[1,2,3]);



