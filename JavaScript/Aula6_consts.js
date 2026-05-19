//const-> e usado para indicar que o valor de uma variavel nao pode ser mudado, e colocado no lugar do let

const PI=3.1415926535;
let raio;
let circunferencia;

//raio=window.prompt('Insira o raio do circulo');
//raio=Number(raio);

// circunferencia=2*PI*raio;

//console.log(circunferencia);

document.getElementById("submeter").onclick = function(){
    raio=document.getElementById("entrada").value;
    circunferencia=2*PI*raio;
    document.getElementById("head3").textContent=circunferencia+"cm";
}