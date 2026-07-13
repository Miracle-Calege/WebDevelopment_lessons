/*
ES6 modulo-> e um ficheiro externo que contem codigo reutilizavel que pode ser importado dentro de um outro ficheiro js

 NB:devemos adicionar o atributo type="module" na tag script no ficheiro html

 para importar:

 import {os elementos que quero importar} from 'localizacao do ficheiro';
 */

import {PI,getArea,getVolume,getCircunferencia} from './Aula51_exemplo.js';

console.log(PI);

console.log(getCircunferencia(10).toFixed(2));//toFixe(num)->fixa apenas o quantidade especificada  no argumento como casas decimais
console.log(getArea(10));
console.log(getVolume(10));