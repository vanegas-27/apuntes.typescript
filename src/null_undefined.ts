(() => {

  let myNull = null; //type any
  let myUndefined = undefined; //type any


  let myNull2 :null = null; //type null
  let myUndefined2 :undefined = undefined; //type undefined

  let myNumber : number | null = null;
  myNumber = 2;


  function saludo(text : null | string){
    if(text){
      // code....
    }else{
      // code...
    }

  }


  function saludoV2(text : null | string){

    let hello = "hola ";

    //esta asignacion es la actual y nos valida si existe, sino devuelve un nulo y se manejaria con el or
    hello += text?.toLocaleLowerCase() || "el valor es nulo";
  }




})
