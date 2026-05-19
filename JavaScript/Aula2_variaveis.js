/*let-> é usado para declarar uma variável

 let nome da variavel(a sua escolha);
   NB:Nome de casa variavel deve ser única

   ${variavel}->para imprimir o valor da variavel
   typeof variavel->exibe o tipo de dado dessa variavel
 */


let idade= 20;
let preco=10.99;
let nome="Miracle Calege"
let online=true;

console.log(typeof idade);//vai retornar number
console.log(typeof nome);//vai retornar string
console.log(typeof preco);//vai retornar number
console.log(typeof online);//vai retornar um valor logico
console.log(idade);
console.log(preco);
console.log(`Eu tenho ${idade} anos`);//para exibir variaveis em textos usa-se ``
console.log(`O preco e $${preco}`);
console.log(`O meu nome e ${nome}`);
console.log(`Estou online? ${online}`);

document.getElementById("p1").textContent=`Meu nome e ${nome}`;
document.getElementById("p2").textContent=`Tenho ${idade} anos de idade`;
document.getElementById("p3").textContent=`Sou estudante? ${online}`;
