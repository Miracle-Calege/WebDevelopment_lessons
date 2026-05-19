/*
forEach()-> e um metodo usado para iterar sobre elementos de um array aplicado a uma determinada funcao
 */

let numeros=[1,2,3,4,5];

numeros.forEach(dobrar);//cada elemento do array vai sobre as instrucoes do callback
numeros.forEach(exibir);//depois de de ser dobrado vai ser impresso


function  dobrar(elemento,indice,array){
    array[indice]=elemento*2;
}

function  triplicar(elemento,indice,array){
    array[indice]=elemento*3;
}
function  quadrado(elemento,indice,array){
    array[indice]=Math.pow(elemento,2);
}

function exibir(elemento){
    console.log(elemento);
}