/*
Heranca-> permite uma classe herda propriedade e metodos de uma classe existente.(pai->filho)
 A classe filho(que herda as propriedades) usada a keyword "extends"
 estrutura:
 nome da classe filho extends nome da classe pai

 NB:A classe filho pode ter os seus metodos e variaveis proprias
 */



class Animal{
    vivo=true;


    comer(){
        console.log(`O ${this.nome} esta a comer`);
    }

    dormir(){
        console.log(`O ${this.nome} esta a dormir`);
    }
}


class Coelho extends Animal {
    nome="coelho";

    correr(){
        console.log(`O ${this.nome} esta a correr`);
    }
}
class Peixe extends Animal {
    nome="Peixe";
    nadar(){
        console.log(`O ${this.nome} esta a nadar`);
    }
}
class Falcao extends Animal {
    nome="falcao";
    voar(){
        console.log(`O ${this.nome} esta a voar`);
    }
}

const coelho = new Coelho();//criando objectos
const peixe = new Peixe();
const falcao = new Falcao();

// console.log(coelho.vivo);
// falcao.vivo=false;//mudando o valor da variavel vivo
// console.log(falcao.vivo);
// console.log(peixe.vivo);
coelho.correr();
coelho.comer();
coelho.dormir();

peixe.nadar();
peixe.voar();//esta linha vai dar erro porque peixe nao tem esse metodo
peixe.dormir();
peixe.comer();