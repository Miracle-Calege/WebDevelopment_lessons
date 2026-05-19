/*
== igual
= para inicializar
if(condicao){//se a condicao for verdadeira a accao abaixo e executada
instrucao
}

if(condicao){
instrucao1
}else if(condicao2){se a instrucao acima nao for verdadeira e esta for a instrucao abaixo e executada
instrucao2
}else{ caso nenhuma das instrucoes acima seja verdadeira a instrucao abaixo sera executada
instrucao3
}
 */



let idade;
// let habilitado=false;
//
// if(idade>=18){
//     console.log("Tens a idade minima exigida para conduzir");
//     if(habilitado){// nested if(um if dentro do outro-uma condicao verificada depois de outra ter sido validada)
//         console.log("Tens a carta de conducao");
//     }else{
//         console.log("Nao tens a carta de conducao");
//     }
//
// }else {
//     console.log("Nao tens a idade minima exigida para conduzir");
// }

//se a idade for 101 o output sera "tens a idade minima exigida", enquanto deveria ser "demasiado velho"- if devem ser organizados em ordem hierarquica
// if(idade>=18){
//     console.log("Tens a idade minima exigida");
// }else if(idade<0){
//     console.log("Deverias te preocupar com cerelac ");
// }else if(idade>100){
//
//     console.log("Demasiado velho ");
// }else{
//
//     console.log("Tens que crescer mais");
// }
//forma correcta
// if (idade > 100) {
//     console.log("Demasiado velho ");
// } else if (idade < 0) {
//     console.log("Deverias te preocupar com cerelac ");
// } else if (idade >= 18) {
//     console.log("Tens a idade minima exigida");
// } else {
//
//     console.log("Tens que crescer mais");
// }
const texto=document.getElementById('texto');
const submeter=document.getElementById('submeter');
const resultado=document.getElementById('resultado');

submeter.onclick=function() {
    idade=texto.value;
    idade=Number(idade);
    if (idade >= 100) {
        resultado.textContent="Demasiado velho ";
    } else if (idade < 0) {
        resultado.textContent="Deverias te preocupar com cerelac";
    } else if (idade >= 18) {
        resultado.textContent="Tens a idade minima exigida";
    } else {
        resultado.textContent="Tens que crescer mais";
    }
}