/*
sort()-> e usado para ordenar elemento.
 */

// let frutas=["maca","laranja","banana","coco","ananas"];
//
// frutas.sort();
//
// console.log(frutas);

//NB: O metodo sort nao funciona correctamente para numeros chamando directamente
//let numeros=[1,10,2,9,3,8,4,7,5,6];
/*
Para que a funcao funcione para numeros devemos passar uma arrow function com um criterio de comparacao
numeros.sort((a,b)=> a-b);
neste caso se a-b for um numero negativo a ficara antes do b
a-b for um numero positivo a ficara depois b
a-b for igual a zero a posicao nao mudara
 */
// numeros.sort((a,b)=> a-b);
// console.log(numeros);
// numeros.sort((a,b)=> b-a);
// console.log(numeros);

//****************Ordenando objectos por atributos**********************

const pessoa=[{nome:"Miracle Calege",idade:20,gpa:3.0},{nome:"Siswe Calege",idade:18,gpa:1.5},{nome:"Calege",idade:19,gpa: 5},{nome:"devCalege",idade:21,gpa:5.5}];

pessoa.sort((a,b)=>b.idade-a.idade);
console.log(pessoa);
//para ordenar comparando strings de um objecto usamos o metodo localeCompare
pessoa.sort((a,b)=>a.nome.localeCompare(b.nome));
console.log(pessoa);