/*
setTimeout()-> e uma funcao que permite programar a execucao de uma funcao depois de um periodo de tempo
 setTimeout(callback/funcao,tempo)

clearTimeout(nomeTimeout)->cancela o timeout antes de executar

 */


// function digaOla(){
//     window.alert("Ola");
// }
//
// setTimeout(digaOla,3000);//a funcao sera executada depois de 3segundos
//
// setTimeout(function digaOi(){
//     window.alert("Oi");
// },5000);
//
// const id=setTimeout(()=> window.alert("kmk"),6000);
// clearInterval(id);

function start(){
setTimeout(()=> window.alert("Hello World!"),3000);
}