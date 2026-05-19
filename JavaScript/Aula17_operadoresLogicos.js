/*
Operadores logicos-usados para manipular operadores logicos

&&(e)-> a instrucao e executada se todas as condicoes forem verdadeiras
 ||(ou)-> a instrucao e executada quando uma das condicoes for verdadeira
 !(nao)-> altera o valor logico de uma variavel do tipo boolean
 */

const temp=200;
//
// if(temp >0 && temp<=30){
//     console.log("A tenoeratura esta boa");
// }else{
//     console.log("A temperatura esta ma");
// }


// if(temp >0 || temp<=30){
//     console.log("A tenoeratura esta boa");
// }else{
//     console.log("A temperatura esta ma");
// }

const ensolarado=true;


if(!ensolarado){// o valor de ensolarado agora sera false porque precedemos pelo "!" e o output sera: nublado
    console.log("Ensolarado");
}else{
    console.log("Nublado");
}