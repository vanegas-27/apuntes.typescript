(() => {


  const login = (email:string , pass:number) :void => {
    console.log(email,pass);
  }

  login("david@gmail.com",20);


  const loginV2 = (
    data : {
      email:string,
       pass?:number
      }
    ) :void => {
    console.log(data.email);
    console.log(data.pass);
  }

  loginV2({
    email:"davidson@gmail.com"
  });


})();
