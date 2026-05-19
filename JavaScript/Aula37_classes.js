/*
class-> permite fazer um codigo mais limpo e estruturado

Estrutura:
class nome{
propriedades
metodos
}

 */

class Produto{
    constructor(nome,preco){//quando usamos "class", nao precisamos de criar uma funcao para agir como constructor, a class ja nos providencia um constructor de nome constructor
        this.nome=nome;
        this.preco=preco;
    }
    exibirProduto(){//funcao.Quando usamos 'class' nao precisamos anteceder as funcoes por function
        console.log(`Produto: ${this.nome}`);
        console.log(`Preco: ${this.preco}`);
    }
}

const produto = new Produto("saia",19.99);//criando o objecto
const produto2 = new Produto("Calcas",12.99);

produto.exibirProduto();
produto2.exibirProduto();