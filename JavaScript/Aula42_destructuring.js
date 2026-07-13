/*
destructuring-> extrai valores de um array e objecto e inicializa a variaveis

[]-> para fazer array destructuring
[]-. para fazer object destructuring
 */


let a=1;
let b=2;
//trocando valores: valor de a agora e 2 e de b agora e 1
[a, b]=[b, a];

console.log(a);
console.log(b);

const cores=["red","green","blue","black","white"];

[cores[0], cores[4]]=[cores[4],cores[0]]

console.log(cores);

//incializando variaveis: A primeira variavel vai ser inicializada com o primeiro valor assim sucessivamente.
const [cor1,cor2,cor3,...extra]=cores;

console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(extra);

//extraindo valores de objectos

const pessoa1={
    nome:"Miracle",
    apelido:"Calege",
    idade:20,
    trabalho:"Desenvolvedor de software"
}

const pessoa2={
    nome:"Siswe",
    apelido:"Calege",
    idade:20,
    trabalho:"PCA"
}
//inicializamos cada variavel entre "{}" com os valores de pessoa1 respectivamente
//const {nome,apelido,idade,trabalho}=pessoa1;
const {nome,apelido,idade,trabalho="Empresario"}=pessoa1;

console.log(nome);
console.log(apelido);
console.log(idade);
console.log(trabalho);

//usando funcao para destructuring

function exibir({nome,apelido,idade,trabalho}) {
    console.log(`nome: ${nome} ${apelido}`);
    console.log(`idade: ${idade}`);
    console.log(`Trabalho: ${trabalho}`);

}

exibir(pessoa1);