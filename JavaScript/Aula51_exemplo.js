/*
NB:Para podermos utilizar na outra classe devemos colocar export em tudo que quisermos utilizar na outra classe
 */

export const PI=3.14159;

export function  getCircunferencia(raio){
    return 2*PI*raio;
}

export function getArea(raio){
    return PI*raio*raio;
}

export function getVolume(raio){
    return PI*raio*raio*4;
}