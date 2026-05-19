
const check=document.getElementById("check");
const visa=document.getElementById("visa");
const master=document.getElementById("master");
const payPal=document.getElementById("payPal");
const sub=document.getElementById("sub");
const pag=document.getElementById("pag");


submeter.onclick=function (){
    if(check.checked){//checked-> retorna um valor logico(true se estiver selecionado e false se nao estiver)
    sub.textContent='Estas subscrita';
    }else {
        sub.textContent='Nao estas subscrita';
    }

    if(visa.checked){
        pag.textContent='Estas a pagar com visa';

    }else if(master.checked){
        pag.textContent='Estas a pagar com MasterCard';
    }else if(payPal.checked){
        pag.textContent='Estas a pagar com PayPal';
    }else{
        pag.textContent='Selecione uma modalidade de pagamento';
    }
}