/*
filter()-cria um novo array com os valores criados.tambem aceita callback
 */

let numeros=[1,2,3,4,5,6,7]

let pares=numeros.filter(par);
let impares=numeros.filter(impar);
console.log(impares);
console.log(pares);

function par(element){
    return element%2===0;
}

function impar(element){
    return element%2!==0;
}