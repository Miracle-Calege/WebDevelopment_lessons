/*
toLocaleString()-> retorna uma string com a representacao de um numero consoante a regiao
estrutura:
toLocaleString("regiao",{options})
 */

let numero=123456.789

// numero=numero.toLocaleString("en-US"); exibimos o numero do jeito americano
numero=numero.toLocaleString("pt-MZ",{style:"currency", currency:"MZN"});//exibimos o numero do jeito mocambicano e colocamos a abreviacao do metical
console.log(numero);