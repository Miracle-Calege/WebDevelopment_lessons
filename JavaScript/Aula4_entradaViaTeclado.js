
/*
window.prompt("mensagem")->cria uma tela que nos permite inserir um dado/informacao
.onclick->quando o elemento é clicado uma accao é gerada
function(){-> quando um elemento é clicado a funcao é executada
instrucoes
}
.value-> retorna o valor de um elemento
 */
/* primeiro método
let username;

username=window.prompt("Como e que te chamas?")
console.log(username);

 */

//Segundo método
let username;
document.getElementById("submeter").onclick = function(){
    username=document.getElementById("entrada").value;
    document.getElementById("head1").textContent=`Ola ${username}`;
}