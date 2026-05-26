/*
static-> e uma palavra-chave usada para definir propriedades ou metodos que pertencem a classe e nao exclusivamente ao objecto
 usamos o nome da classe .metodo/variavel
 */

// class MathUtil{
//     static PI=3.14159;
//
//     static getDiametro(raio){
//         return raio*2;
//     }
//     static getCircunferencia(raio){
//         return this.getDiametro(raio)*this.PI;
//     }
//     static getArea(raio){
//         return raio*this.PI*raio;
//     }
// }
//
// console.log(MathUtil.PI);// Nao foi necessario criar um objecto MathUtil para acessao ao PI, se substituirmos o static por var para exibir as propriedade da classes deveremos criar um objecto
//
// console.log(MathUtil.getDiametro(10));
//
// console.log(MathUtil.getCircunferencia(10));
//
// console.log(MathUtil.getArea(10));

/*Exemplo 2*/

class User{
    static userCount=0;
    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    ola(){
        console.log(`Ola, chamo-me:${this.username}`);
    }
}

const user1=new User("Miracle");
const user2=new User("Siswe");
const user3=new User("Calege");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
user1.ola();
user2.ola();
user3.ola();
console.log(User.userCount);//total de objectos que foram criados