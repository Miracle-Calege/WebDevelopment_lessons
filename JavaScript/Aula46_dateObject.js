/*
objects do tipo data-> sao objectos que contem valores que representam datas e horas


 ***********************criacao de um objecto do tipo data*****************

 let/var/const nome=new Date();-> este objecto vai conter a data e hora actual

***********************criacao de um objecto do tipo data com uma data especifica*****************

let/var/const nome=new Date(ano,mes,dia,hora,minuto,segundo, milissegundo);
NB: os meses comecam por 0(Janeiro)

 let/var/const nome=new Date("ano-mes-diaThora:minutos:segundos");

 let/var/const nome=new Date(milissegundos);


******************************Retornando os atributos do objecto date***************************
 getFullYear()-> retorna o ano
 getMonth()-> retorna o mes
 getDate()-> retorna o dia(o primeiro dia de semana e 0-> domingo)
 getDay()-> retorna o dia da semana
 getHours()->retorna as horas
 getMinutes()-> retorna os minutos
 getSeconds()-> retorna os segundos
 NB: Para os respectivos metodos acima existem os respectivos setters

 ************************Comparando data**********************
 usamos os sinais de comparacao ex:

 if(data1>data2){
 instrucao
 }

 */

const data=new Date();

console.log(data);

const data2=new Date(2006,2,29,14,0,5);

console.log(data2);

const data3=new Date("2006-03-29T14:00:05");

console.log(data3);

const data4=new Date(1700000000);

console.log(data4);

console.log(data.getFullYear());
console.log(data.getMonth());
console.log(data.getDate());
console.log(data.getDay());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());
data.setFullYear(2025)
console.log(data.getFullYear());
