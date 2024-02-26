"use strict";
(() => {
    const login = (email, pass) => {
        console.log(email, pass);
    };
    login("david@gmail.com", 20);
    const loginV2 = (data) => {
        console.log(data.email);
        console.log(data.pass);
    };
    loginV2({
        email: "davidson@gmail.com"
    });
})();
