function verificaPrimo () {
    var txtnumero = document.getElementById("txtnumero");
    var resp = document.getElementById("resp");

    var numero = Number.parseInt(txtnumero.value);
    var div = 0;
    var primo = 0;

    if (numero <= 0 || isNaN(numero)) {
        window.alert("Por favor, informe um número maior que zero!");
        return;
    }
    for (var cont = 1; cont<numero; cont++) {
        div = numero % cont;

        if (div == 0) {
            primo++
        }
    }

    if (primo == 1) {
        resp.innerHTML = `O número ${numero} é primo!`
    }
    else {
        resp.innerHTML = `O número <strong>${numero}</strong> não é primo!`
    }
}
var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener('click', verificaPrimo);