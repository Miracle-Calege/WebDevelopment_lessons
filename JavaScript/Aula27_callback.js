/*
callback-> e uma funcao que e passada como argumento para outra funcao

Apos a criacao de 2 ou mais funcoes, durante a chamada passamos no constructor(entre os parenteses) o nome da funcao que sera tida como argumento.NB:Na funcao tambem devemos ter o parametro
 */

ola(tchau);


function ola(chamada){
    console.log("Ola!");
    chamada();
}

function tchau(){
    console.log("Tchau!");
}