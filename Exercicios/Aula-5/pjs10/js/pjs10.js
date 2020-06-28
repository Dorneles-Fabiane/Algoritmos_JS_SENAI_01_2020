function verificaNumeroPerfeito() {
    var txtnumero = document.getElementById("txtnumero");
    var divisores = document.getElementById("divisores");
    var resp = document.getElementById("resp");

    var numero = Number(txtnumero.value);

    var cont = 2, soma = 0, resto = 0;

    if (numero>1) {
        soma = 1;
        divisores.innerHTML = `1`
    }

    for (cont; cont < numero; cont++) {
        
        resto = numero % cont
        
        if (resto == 0) {
            divisores.innerHTML += `, ${cont}`;
            soma = soma + cont;
        }
    }

    divisores.innerHTML += ` (Soma: ${soma})`;

    if (soma == numero) {
        resp.innerHTML = `<strong>${numero} é um número perfeito!</strong>`
    }
    else {
        resp.innerHTML = `<strong>${numero} não é um número perfeito</strong>!`
    }
}
btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener('click', verificaNumeroPerfeito);