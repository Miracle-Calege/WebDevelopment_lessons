/*
arrow functions-> e um forma mais concisa/simplificada de escrever funcoes.
estrutura:
(parametros)=> instrucao
se tiver mais de uma instrucao
(parametros)=> {instrucao}
 */

const ola=function (){//function expression
    console.log("Ola");
}
ola();
const ola2=()=>console.log("Ola");//arrow expression sem argumentos
ola2();

const ola3=(nome,idade)=>console.log(`Ola ${nome} ${idade}`);

ola3("Miracle",25)

setTimeout(()=>console.log("Ola"),3000);//usando arrow expressions directamente como callback