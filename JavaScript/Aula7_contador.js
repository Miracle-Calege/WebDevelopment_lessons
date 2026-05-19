
const diminuir=document.getElementById("diminuir");
const reset=document.getElementById("reset");
const aumentar=document.getElementById("aumentar");
const contador=document.getElementById("contador");

let count=0;



aumentar.onclick=function(){
    count++;
    contador.textContent=count;
}
diminuir.onclick=function(){
    count--;
    contador.textContent=count;
}
reset.onclick=function(){
    count=0;
    contador.textContent=count;
}


