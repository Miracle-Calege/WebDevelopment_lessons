/*
Object-> e uma colecao de propriedade relacionadas e metodos que podem representar objectos do mundo real
 propriedade-> caracteristicas do objecto
 funcoes-> accoes que os objectos podem executar
 Estrutura:
 Objecto={
 chave:valor,
 chave:function(),}
 }
 Para acessar as funcoes e propriedade do objecto:nome do objecto.propriedade/funcoes
 */

const pessoa = {//objecto do tipo pessoas e as suas propriedades
    nome: "Miracle",//propriedade
    apellido: "Calege",
    idade:20,
    estudante:true,
    ola:function (){console.log("ola, chamou-me Miracle Calege")},//funcao
}


console.log(pessoa.nome);
console.log(pessoa.apellido);
console.log(pessoa.idade);
console.log(pessoa.estudante);
pessoa.ola();

const pessoa2 = {
    nome: "Siswe",
    apellido: "Calege",
    idade:20,
    estudante:true,
    ola:function (){console.log("Kmk, Siswe Calege aqui")},
}


console.log(pessoa2.nome);
console.log(pessoa2.apellido);
console.log(pessoa2.idade);
console.log(pessoa2.estudante);
pessoa2.ola();
