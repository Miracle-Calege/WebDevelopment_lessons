/*
console.time()->determina o tempo que o instrucao leva a ser executada
console.time("identificador");-> inicia o metodo

instrucao a determinar o tempo

console.timeEnd(identificador);-> finaliza o metodo
 */

console.time("Teste");
for(let  i=0; i<1000000; i++){

}

console.timeEnd("Teste");