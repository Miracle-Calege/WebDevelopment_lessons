/*
cosntructor-> e uma funcao/metodo especial para definir propriedade e metodos de objectos
Estrutura:
function Nome(arg1,arg2,arg3){//o nome da funcao deve ter a inicial maiuscula
this.arg1=arg1,
this.arg2=arg2,
this.arg3=arg3,
this.funcao=function(){instrucao}
}
criacao de Objecto:
const/var/let  nome= new NomeFuncao(argumentos);
 */

function Carro(marca,modelo,ano,cor){
    this.marca=marca;
    this.modelo=modelo;
    this.ano=ano;
    this.cor=cor;
    this.drive=function () {console.log(`tu conduzes um ${this.modelo}`)}
}

const car1=new Carro("Ford","Mustang",2024,"vermelho");
const car2=new Carro("Chevrolet","Camaro",2025,"azul");
const car3=new Carro("Dodge","Charger",2026,"prata");

car1.drive();
car2.drive();
car3.drive();
