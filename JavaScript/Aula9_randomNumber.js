

// let randomNum=Math.floor(Math.random()*100)+1;//Math.random()-> retorna um numero aleatorio entre 0 e 1(o intervalo de 1 e aberto), exemplo se quisermos mudar o intervalo podemos usar expressoes aritmeticas com a funcao
//
// console.log(randomNum);



const botao=document.getElementById("botao");
const lab=document.getElementById("lab");

const min=1;
const max=6;
let randomNum;

botao.onclick = function(){
    randomNum=Math.floor(Math.random()*max)+min;//conjunto [1-6]
    lab.textContent=randomNum;
}