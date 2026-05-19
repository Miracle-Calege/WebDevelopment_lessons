//switch-> uma ferramenta eficiente em casos que teriamos muitos if's
/*
estrutura

swicth(variavel a verificar condicoes){
case 1: // se a variavel for igual 1
accao
break;
}
case 2: // se a variavel for igual 1
accao
break;
}
.
.
.
.

default: //se nenhuma das condicoes for cumprida
accao
break;

 */



let pontuacao =92;
let letra;

switch(true){// switch leva true como argumento em casos em que os nossos cases retornam valores logicos
    case pontuacao >= 90:
        letra='A';
        break;

    case pontuacao >= 80:
        letra='B';
        break;

    case pontuacao >= 70:
        letra='C';
        break;

    case pontuacao >= 60:
        letra='D';
        break;

    default:
            letra='F';

}

console.log(letra);



