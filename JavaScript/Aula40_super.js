/*
super-> e uma keyword usado na classe para chamar o constructor ou para acessar metodos e propriedades da classe pai(superclasse)
 NB:sempre que tivermos uma situacao de heranca e constructores, nos constructores filhos devemos chamar o construtor da classe pai atraves do super
 */

class Animal {
    constructor(nome,idade) {
    this.nome = nome;
    this.idade = idade;
    }
    mover(speed){
        console.log(`O ${this.nome} move-se a velocidade de ${speed}mph`);
    }
}
class Coelho extends Animal {
    constructor(nome, idade, run) {
        super(nome,idade);
        this.run = run;
    }
    correr(){
        console.log(`O ${this.nome} corre`);
        super.mover(this.run);
    }
}
    class Peixe extends Animal{
    constructor(nome,idade,swim) {
        super(nome,idade);
        this.swim = swim;
    }
        nadar(){
            console.log(`O ${this.nome} nada`);
            super.mover(this.swim);
        }
}
class Falcao extends Animal{

    constructor(nome,idade,fly) {
        super(nome,idade);
        this.fly = fly;
    }
    voa(){
        console.log(`O ${this.nome} voa`);
        super.mover(this.fly);
    }
}

const coelho = new Coelho("coelho",1,25);
const peixe = new Peixe("peixe",2,12);
const falcao = new Falcao("falco",3,50);
console.log(peixe.nome);
console.log(coelho.idade);
console.log(falcao.fly);

coelho.correr();
peixe.nadar();
falcao.voa();
