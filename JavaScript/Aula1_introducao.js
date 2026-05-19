/*js-> é uma linguagem usada para criar páginas dinámicas e interactivas
console.log("mensagem")-> é usado para imprimir um texto. O texto pode estar entre "",ou '' ou ``.ex:console.log('Ola');
console.log(`OLa`);
window.alert("mensagem")->cria uma telinha de alerta
document.getElementById("id")->retorna um componente pelo seu id
textContent->inicializa o elemento retornado pelo id com um texto
 */

// console.log("Ola");-> para visualizar isto no browser devemos ir para a opcao inspect
// window.alert(`Isto e um alerta`);

document.getElementById("myH1").textContent=`Hello`;
document.getElementById("myP").textContent=`Primeiro programa em javascript`;