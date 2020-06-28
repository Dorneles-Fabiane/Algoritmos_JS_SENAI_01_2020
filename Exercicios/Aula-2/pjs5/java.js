function verifica()
{
    var txtvelocidadePermitida = document.getElementById("txtvelocidadePermitida");
    var txtvelocidadeCondutor = document.getElementById("txtvelocidadeCondutor");

    var velocidadePermitida = Number(txtvelocidadePermitida.value);
    var velocidadeCondutor = Number(txtvelocidadeCondutor.value);
    var resposta = document.getElementById("resposta")

    var porExcedente = velocidadeCondutor - velocidadePermitida;

    if (velocidadeCondutor <= velocidadePermitida)
    {
        resposta.innerHTML = "<strong>Resultado: SEM MULTA</strong>";
        resposta.style.color = "green";
    }
    else 
    {
        if(porExcedente <= 20)
        {
            resposta.innerHTML = "<strong>Resultado: MULTA LEVE</strong>";
            resposta.style.color = "orange";
        }
        else 
        {
            resposta.innerHTML = "<strong>Resultado: MULTA GRAVE</strong>";
            resposta.style.color = "red";
        }
        
    }
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verifica);
