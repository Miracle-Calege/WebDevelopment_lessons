/*
let/const nomeArray=[{propriedade1:valor,propriedade2:valor,...}, {propriedade1:valor,propriedade2:valor,...},...]
 */


//criando um array
const frutas=[{nome:"maca",cor:"vermelho",calorias:95},
    {nome:"Laranja",cor:"Laranja",calorias:45},
    {nome:"Uva",cor:"roxo",calorias:105}];

//acessando as propriedades do array:nomeArray[idx].propriedade

console.log(frutas[0].nome);

//adicionando um novo objecto:push({propriedade1:valor,...})

frutas.push({nome:"Ananas",cor:"amarelo",calorias:62});

//splices elimina valores de um ponto para o outro: splice(incio, fim)
frutas.splice(1,2);
console.log(frutas);
