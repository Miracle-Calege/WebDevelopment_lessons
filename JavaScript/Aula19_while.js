/*
While loop-> repete uma instrucao enquanto a condicao for verdadeira

estrutura:

while(condicao){
instrucao
}

do{
instrucao
}while(condicao)

while vs do while
do while-> executa e depois verifica a condicao
while-> verifca a condicao e depois executa
 */


// let username="";

// while (username==="" || username===null){
//     username=window.prompt("Insira o seu nome");
// }
//
// console.log(`Ola ${username}`);
// let username;
//
// do{
//     username=window.prompt("Insira o seu nome");
// } while (username==="" || username===null)
//
//
// console.log(`Ola ${username}`);

// let loggeIn=false;
// let username;
// let  password;

// while (!loggeIn){
//     username=window.prompt("Digite seu nome");
//     password=window.prompt("Digite a sua password");
//     if(username==="myUsername" && password==="myPassword"){
//         loggeIn=true;
//         console.log("Estas logado");
//
//     }else{
//         console.log("Credenciais invalidas ");
//     }
// }

let loggeIn;
let username;
let  password;

do{
    username=window.prompt("Digite seu nome");
    password=window.prompt("Digite a sua password");
    if(username==="myUsername" && password==="myPassword"){
        loggeIn=true;
        console.log("Estas logado");

    }else{
        console.log("Credenciais invalidas ");
    }
}while (!loggeIn)