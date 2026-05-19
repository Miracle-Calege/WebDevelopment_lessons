/*
funcao/metodo-> e uma seccao onde colocamos instrucoes e chamamos/reutilizarmos sempre que precisarmos

 Estrutura:

 function nomeDaFuncao(){
 instrucoes
 }
 com Parametros:

  function nomeDaFuncao(variavel1, variavel2){
 instrucoes
 }

NB:Uma funcao pode retornar um dado usando no final da funcao a palavra return e o dado;

 Chamando uma funcao:

 nomeDaFuncao();
 */


// function parabens(username,idade){
//     console.log("Parabens a voce"); //inves de escrever esta linha muitas vezes posso chamar esse metodo quantas vezes eu quiser
//     console.log(`Parabens ${username}}`);
//     console.log(`Agora tens ${idade} anos de idade`);
// }
//
// parabens("Miracle Calege",21)

function  add(x,y){
    let result=x+y;
    return result;
}
const resultado=add(5,4);
console.log(resultado);
