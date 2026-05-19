/*
map()-> aceita um callback e aplica a funcao a cada elemento do array e depois retorna um array
 */

const numeros=[1,2,3,4,5];
const quadrados=numeros.map(quadrado);
const cubos=numeros.map(cubo);

console.log(cubos);
console.log(quadrados);

function quadrado(element){
    return  Math.pow(element,2);
}

function cubo(element){
    return  Math.pow(element,3);
}