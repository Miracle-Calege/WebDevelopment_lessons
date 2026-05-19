/*for loop-> e usado para um certo numero limitado de repeticoes

estrutura:

for(let/const/var variavel=valor inicial; variavel condicao de paragem(<,>,=);variacao da variavel){
instrucao
}
break-> para o loop assim que uma condicao for cumprida
continue-> para uma iteracao do loop assim que uma condicao for cumprida
 */

// for(let i=10; i>0;i--){
//     console.log(i);
// }
// console.log("Happy New Year");

for(let i=1; i<=20;i++){
    if(i==13){//13 nao sera impresso mas 14 e os demais serao impressos
        continue
    }
    else {
        console.log(i);
    }
}

for(let i=1; i<=20;i++){
    if(i==13){//13 nao sera impresso pois o programa parara nesse valor
        break
    }
    else {
        console.log(i);
    }
}

