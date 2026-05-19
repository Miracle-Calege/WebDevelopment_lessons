/*
variavel local-> aquela visiveis  somente no metodo
variavel global-> aquela visivel para em todo o lado do programa
 */


//x e uma variavel local
// function  funcao1() {
//     let x = 1;
//     console.log(x);
// }
// function  funcao2() {
//     let x = 1;
//     console.log(x);
// }
// funcao1();
// funcao2();

let x=3;

//x e uma variavel global
function  funcao1() {
    console.log(x);
}
function  funcao2() {
    console.log(x);
}
funcao1();
funcao2();

//NB:Se houver uma variavel global e e local o programa  vai concluir que estamos a referir a variavel local