/*
reduce()-> reduz os elemento de um array para um unico valor.Tambem faz uso dos callbacks.Atraves de operacoes aritmeticas transforma todos os valores do array em um unico dependendo da operacao
 */

const precos=[5,30,10,25,15,20];

const total=precos.reduce(soma);
console.log(total);

function soma(anterior,proximo){
    return anterior+proximo;
}