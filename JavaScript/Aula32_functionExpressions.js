/*
function expression-> e um jeito de definir uma funcao como variavel
const/let/var nome=function(){instrucoes}

chamada:
nome();

e possivel tambem passar uma funcao como argumento de uma funcao:
funcao(function(){instrucoes},elemento)
 */

// const ola=function(){
//     console.log("Ola");
// }
//
// ola();

//setTimeOut-e uma funcao cronometro onde o primeiro argumento/callback/funcao e a instrucao e o segundo aegumento e um contador

setTimeout(function(){
    console.log("Ola"); }
    ,3000);