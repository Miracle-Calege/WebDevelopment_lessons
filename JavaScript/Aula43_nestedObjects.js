//nested objects-> objectos dentro de outros objectos.Ex: Objecto1{Objecto2{},Objecto3{}}

//criamos um objecto pessoa que tem um objecto dentro de si chamado endereco
// const pessoa={
//     nomeCompleto:"Miracle Calege",
//     idade:20,
//     estudante:true,
//     hobbies:["Programacao","xadrez","series/filmes"],
//     endereco:{
//         rua:"123 conch st",
//         cidade:"Matola",
//         pais:"Mocambique"
//     }
// }
//
//
// console.log(pessoa.nomeCompleto);
// console.log(pessoa.idade);
// console.log(pessoa.estudante);
// console.log(pessoa.hobbies);//podemos acessas o hobbie numa posicao especifica pessoa.hobbies[0]
// console.log(pessoa.endereco.rua);//pessoa acessa a endereco e endereco acessa a rua
// console.log(pessoa.endereco);

//usando class

class Pessoa {
    constructor(nome,idade,...endereco) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = new Endereco(...endereco);
    }
}

class Endereco{
    constructor(rua,cidade,pais){
        this.rua = rua;
        this.cidade = cidade;
        this.pais = pais;
    }
}

const  pessoa1=new Pessoa("Miracle",20, "124 conch st.","Matola","Mocambique");
console.log(pessoa1.endereco.pais);
console.log(pessoa1);