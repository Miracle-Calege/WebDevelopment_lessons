/*
this->referencia um objecto que esta a ser usado naquele determinado momento
 */








const pessoa = {
    nome: "Miracle",
    apellido: "Calege",
    idade:20,
    estudante:true,
    ola:function (){console.log(`ola, chamou-me ${this.nome}`)},//this referencia o objecto actual this.nome=pessoa.nome.NB:this nao funciona para arrow function
}


console.log(pessoa.nome);
console.log(pessoa.apellido);
console.log(pessoa.idade);
console.log(pessoa.estudante);
pessoa.ola();


