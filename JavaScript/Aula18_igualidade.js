/*
= : usado para inicializar uma variavel
== : usado para comparar(verificar se variaveis/valores sao iguais)
===: usado para comparar se valores e tipos de dados sao iguais
 != : desigualdade (inverso de ==)
 !== : inverso de (===)
 */

const PI=3.14;

if(PI=="3.14"){// esta condicao sera verdadeira apesar de PI ser uma variavel do tipo numerica e "3.14" usado na comparacao estar como string
    console.log("E o PI")
}else{
    console.log("Nao e o PI")
}


if(PI==="3.14"){// esta condicao sera falsa pois o PI e do tipo numerico e "3.14" e uma string
    console.log("E o PI")
}else{
    console.log("Nao e o PI")
}

