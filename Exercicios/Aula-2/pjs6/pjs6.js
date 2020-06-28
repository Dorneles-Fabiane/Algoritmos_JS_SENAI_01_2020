function mostrar(){
    var txtvalorSaque = document.getElementById("txtvalorSaque").value;
    
    var valorSaque = Number(txtvalorSaque);

    var resposta1 = valorSaque/100;
    var resto1 = valorSaque%100;

    var resposta2 = resto1/50;
    var resto2 = resto1 %50;

    var resposta3 = resto2/10;
    var resto3 = resto2%10;

    if (resto3 == 0 & valorSaque != 0)
    {
        document.getElementById('resposta').innerHTML = (`<strong>Notas de R$ 100,00: ${Math.trunc(resposta1)}</strong><br/>`);
        document.getElementById('resposta').innerHTML +=(`<strong>Notas de R$ 50,00: ${Math.trunc(resposta2)}</strong><br/>`);
        document.getElementById('resposta').innerHTML +=(`<strong>Notas de R$ 10,00: ${Math.trunc(resposta3)}</strong><br/>`);
    }
    else {
        document.getElementById('resposta').innerHTML = `Valor para saque indisponível.`
        }
}
var btExibir = document.getElementById("btnExibir");
btExibir.addEventListener("click", mostrar);