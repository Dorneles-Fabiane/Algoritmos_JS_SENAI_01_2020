let vNumeros = [];

function adicionaNumeros() {

   for (let cont = 1; cont <= 15; cont++) {
       numero = prompt(`Digite o ${cont}º valor:`);
       vNumeros.push(numero);
   } 
}
function verificaParImpar() {
    resp = "";

    for (pos = 0; pos < vNumeros.length; pos++) {

        if ((vNumeros[pos]%2) ==0) {
            resp += `Valor (${pos+1}): ${vNumeros[pos]} --> PAR\n`;
        }
        else {
            resp += `Valor (${pos+1}): ${vNumeros[pos]} --> ÍMPAR\n`;
        }
    }
    alert(resp);
    limpar()
}
function limpar() {
    vNumeros = [];
}
btnAdicionar = document.querySelector("button#btnAdicionar");
btnAdicionar.addEventListener('click', adicionaNumeros);

btnVerificar = document.querySelector("button#btnVerificar");
btnVerificar.addEventListener('click', verificaParImpar);