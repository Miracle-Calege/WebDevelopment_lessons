/*
Array uma estrutura capaz de armazenar mais de um valor
Estrutura:

Criando e inicializando:
let/const/var nome do array=[item1,item2,...];


Acessando elementos:
nome do array[posicao];
NB:Lembrando que comecamos sempre a contar de zero.

Inicializando uma posicao:
nome do array[posicao]=valor;

//Metodos

push(valor)-> adiciona um elemento no fim da estrutura
pop()-> remove o ultimo elemento
unShift(valor)-> adiciona um elemento no inicio da estrutura
shift()->remove um elemento do inicio
length-> retorna o tamanho do array
indexOf(valor)-> retorna o indice onde o elemnto se encontra, se nao existir retornara -1

 */


 let frutas=["maca","laranja","uva"]
//
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
//
// frutas.push("manga");
// frutas.pop();
// frutas.unshift("coco");
// frutas.shift();

//imprimindo os elementos usando for

// for(let i=0;i<frutas.length;i++){
//     console.log(frutas[i]);
// }

//enchanced for
//for( let/const/var variavel of nome da estrutura){}
for(let fruta of frutas){
    console.log(fruta);
}