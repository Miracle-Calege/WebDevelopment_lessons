/*
divisao de strings consiste  em criar uma substring da porcao de outra

 string.slice(inicio da substring,fim da substring +1(considerando os espacos em branco));
 */


const nomeCompleto="Miracle Siswe De Anselmo Calege";

const primeiroNome=nomeCompleto.slice(0,7);
const segundoNome=nomeCompleto.slice(8,13);
const preposicao=nomeCompleto.slice(14,16);
const progenitor=nomeCompleto.slice(17,24);
const apelido=nomeCompleto.slice(25,31);//apelido como e o ultimo substring tambem pode ser escrito nomeCompleto.slice(25)
console.log(primeiroNome);
console.log(segundoNome);
console.log(preposicao);
console.log(progenitor);
console.log(apelido);
console.log(nomeCompleto.slice(-2));//retorna caracteres na ordem inversa -1 retorna e -2 retonra ge assim sucessivamente...

