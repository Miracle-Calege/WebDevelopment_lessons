
/*
2D array que armazena matrizes de dados em linhas e colunas
Estrutura:

Criando e inicializando:

const/var/let nome=[[array1],[array2],[array3],...]

para imprimir

for(let nome of nomeArray){
console.log(nome);
}

Acessando indice:
nomeArray[indice linha][indice coluna]=valor;
 */

const matriz=[
    [1,2,3],
    [4,5,6],
    [7,8,9]]

matriz[0][0]='x';
matriz[0][1]='o';
matriz[0][2]='x';

matriz[1][0]='o';
matriz[1][1]='x';
matriz[1][2]='0';

matriz[2][0]='x';
matriz[2][1]='o';
matriz[2][2]='x';

for(let linha of matriz){
    const rowString=linha.join(' ');//essa funcao junta cada linha separando por espaco
    //console.log(linha);
    console.log(rowString);
}