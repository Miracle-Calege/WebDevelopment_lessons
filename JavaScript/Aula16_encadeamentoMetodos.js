/*
method chaining->consiste em chamar um metodo depois do outro numa linha continua de codigo
 */


let username=window.prompt('Insira o seu nome: ');

// username=username.trim();
// let letra=username.charAt(0);
//    letra=letra.toUpperCase();
//
// let extraChars=username.slice(1);//divide a partir do indice 1
// extraChars=extraChars.toLowerCase();
// username=letra+extraChars;
// console.log(username);

//---------------------------Method chaining--------------------------

username=username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
