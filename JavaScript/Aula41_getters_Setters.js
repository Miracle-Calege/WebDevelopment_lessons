/*
getter-> um metodo que torna a propriedade legivel
setter-> um metodo que torna a propriedade editavel



 setter:

 set propriedade(valor){
 this.propriedade=valor
 }
 getter:

 get propriedade(){
 return this.propriedade;
 }

console.erro(msg)-> e usado para exibir uma mensagem de erro, geralmente acompanhada pelo icone vermelho

 NB:A propriedade a ser retornada ou editada deve estar escrita da mesma forma que esta no constructor. Devemos colocar "_" antes da propriedade para mostrar que e uma propriedade privada

 getters e setters nos permitem edital e acessar as propriedades via".".
 */

class Rectangulo{
    constructor(comprimento, altura){
        this.comprimento = comprimento;
        this.altura = altura;
    }

    set comprimento(width){//setter
        if(width > 0){
            this._comprimento = width;
        }else{
            console.error("comprimento deve ser um numero positivo")
        }
    }
    set altura(height){//setter
        if(height > 0){
            this._altura = height;
        }else{
            console.error("Altura deve ser um numero positivo")
        }
    }
    get comprimento(){
        return this._comprimento;
    }
    get altura(){
        return this._altura;
    }
    get area(){//apesar de nao ser uma propriedade pode ser acessada tambem
        return this._altura * this._comprimento;
    }
}

const rectangulo = new Rectangulo(3,4);
console.log(rectangulo.altura);
console.log(rectangulo.comprimento);
console.log(rectangulo.area);