
//parte 1
function  imprimir(){
    let impressao="";
    for(let i=1;i<=10;i++){
    impressao+=i+" ";
    }
    return impressao;
}

function impar(){
    let impressao="";
    for(let i=1;i<=100;i++){
        if(i%2!==0){
            impressao+=i+" ";
        }
    }
    return impressao;
}
function  somar(){
     let soma=0;
     for(let i=1;i<=10;i++){
         soma+=i;
     }
     return soma;
}

function somaImpar(){
    let soma=0;
    for(let i=10;i<30;i++){
        if(i%2!==0){
            soma+=i;
        }
    }
    return soma;
}

//parte 2
let numeros = [10, 20, 5, 8, 15];



let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}


let media = soma / numeros.length;



let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}




document.getElementById("i").textContent=`i). `+imprimir();
document.getElementById("ii").textContent=`ii). `+impar();
document.getElementById("iii").textContent=`iii). `+somar();
document.getElementById("iv").textContent=`iv). `+somaImpar();


document.getElementById("0").textContent=`Array:[${numeros}]`;
document.getElementById("1").textContent=`i). `+soma;
document.getElementById("2").textContent=`ii). `+media;
document.getElementById("3").textContent=`iii). `+maior;
