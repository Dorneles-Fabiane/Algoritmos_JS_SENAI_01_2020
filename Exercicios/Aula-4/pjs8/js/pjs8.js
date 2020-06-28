function calcular() {
    var txtnCoelhos = document.getElementById("txtnCoelhos");
    var txtnAnos = document.getElementById("txtnAnos");
    var resposta = document.getElementById("resp");

    var nCoelhos = Number.parseInt(txtnCoelhos.value);
    var nAnos = Number.parseInt(txtnAnos.value);

    if (nCoelhos < 2) {
        window.alert("Número de coelhos inválido! É necessário pelo menos um casal.");
    }
    else {
        var cont = 2;
        var soma = nCoelhos;

        resposta.innerHTML = `1º ano: <strong> ${nCoelhos} </strong> coelhos<br>`;

        while (cont <= nAnos) {
            soma = soma * 3;

            resposta.innerHTML += `${cont}º ano: ${soma} coelhos </br>`;
            cont++
        }
    }
}
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcular);