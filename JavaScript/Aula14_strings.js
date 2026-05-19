/*
String methods-> permite que possamos manipular e trabalhar com arrays
Para acessarmos aos metodos: nome da variavel.metodo()

charAt(indice)-> retorna o caracter neste indice
indexOf("caracter")-> retorna o indice da primeira ocorrencia do caracter
lastIndexOf("caracter")->retorna o indice da ultima ocorrencia do caracter;
length-> retorna o tamanho da string
trim()-> remove os espacos antes e depois da string
toUpperCase()->torna todos os caracter maiusculos
toLowerCase()-> torna todos os caracter minusculos
repeat(numero de vezes)->repete a string um determinado numero de vezes
startsWith("caracter")-> retorna um valor logico caso a string comece ou nao por esse caracter
endsWith("caracter")-> retorna um valor logico caso a string termine ou nao por esse caracter
includes(" ")-> verifica se o nome contem esse caracter
replaceAll("caracter a ser substituido", "caracter substituto")-> substitui na string um caracter pelo outro
padStart(numero de caracter limite,"caracter a ser adicionado no inicio")->adiciona no inicio caracter ate que a quantidade maxima de caracteres sejam satisfeita
padEnd(numero de caracter limite,"caracter a ser adicionado no inicio")->adiciona no fim caracter ate que a quantidade maxima de caracteres sejam satisfeita
 */

let userName="devCalege";
console.log(userName.charAt(0));
console.log(userName.indexOf("e"));
console.log(userName.lastIndexOf("e"));
console.log(userName.length);
let user= "    devCalege   ";
console.log(user.includes(" "));
console.log(user.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(10));
console.log(userName.startsWith("d"));
console.log(userName.endsWith("d"));
console.log(userName.replaceAll("e","E"));
let numero="1";
console.log(numero.padStart(4,"0"));
console.log(numero.padEnd(4,"0"));
