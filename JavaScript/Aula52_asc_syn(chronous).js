/*
synchronous-> e o codigo que executa linhapor linha de maneira sequencial

asyncronous-> permite que multiplas operacoes possam ser executadas paralelamente
usa callbacks,promises,async/await
 */

function func1(callback){
    setTimeout(()=>{console.log("Tarefa1");callback()},3000);
}
function func2(){
    console.log("Tarefa2");
    console.log("tarefa3");
    console.log("tarefa4");
}

func1(func2);