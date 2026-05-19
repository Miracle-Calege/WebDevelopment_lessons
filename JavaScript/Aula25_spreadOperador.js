/*
Spread operator(...)-> permite que um array ou string seja dividido em elementos separados
 */

// let numeros=[1,2,3,4,5];
// //let maximo=Math.max(numeros); nao funcionara
// let maximo=Math.max(...numeros);//nao podemos colocar um array directamente numa funcao
// console.log(maximo);
//
// let username="Miracle Calege";
// let letras=[...username].join('-');//cria uma array de caracteres e separa-os com um hifen
// console.log(letras);

let frutas=["maca","laranja","uva"];
let comida=["cenoura","cebola","batas"]
let novaFrutas=[...frutas,...comida,"queijo"];//o operador spread cria uma copia do array
console.log(novaFrutas);
