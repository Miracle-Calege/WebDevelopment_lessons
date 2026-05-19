/*
rest parameters(...rest)-> permite que uma funcao tenha um numero ilimitado de argumentos/parametros
 estrutura:
 function nomeFuncao(...elemento){
 }
 NB:Assemelha-se a elipsis em java
 */


// function abrirGeleira(...comidas){
// console.log(comidas);
// }
//
// function  getComidas(...comidas) {
//     return comidas;
// }
//
// const comida1="pizza";
// const comida2="hamburguer";
// const comida3="hotdog";
// const comida4="sushi";
// const comida5="lasanha";
//
// //abrirGeleira(comida1,comida2,comida3,comida4,comida5);
// const comidas=getComidas(comida1,comida2,comida3,comida4,comida5);
// console.log(comidas);

function soma(...numeros){
    let resultado=0;
    for(let numero of numeros){
        resultado+=numero;
    }
    return numeros;
}
const total=soma(1,2,3,4,5);
console.log(`total e : ${total}`);

