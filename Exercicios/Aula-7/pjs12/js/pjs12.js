function main() {
    //variável de escopo global
    palavra = document.querySelector("input#palavra").value;
    //pega elementos da página
    textoSaida = document.querySelector("h3#resp");
    palavraInvertida = "";

    if (validaCampo(palavra)){
        palavraInvertidaSaida = inverterPalavra(palavra).toUpperCase();

        textoSaida.innerHTML = `Palavra Invertida: ${palavraInvertidaSaida}<br>`;

        if (verificaPalindromo()) {
            textoSaida.innerHTML += `A palavra é um palíndromo!`;
        }
        else {
            textoSaida.innerHTML += `A palavra não é um palíndromo!`;
        }

    }
    else {
        alert("Por favor, digite uma palavra.");
        limparCampos ();
    }
}

function validaCampo (palavra) {
    if (palavra.length == "" || Number(palavra)) {
        return false;
    }
    else {
        return true;
    }
}

function inverterPalavra(palavra) {
    resposta = "";
 
    for (cont = palavra.length; cont >=0; cont--) {
        palavraInvertida += palavra.charAt(cont);
    }
    return palavraInvertida
}
function verificaPalindromo () {
    if (palavra == palavraInvertida) {
        return true;
    }
    else {
        return false;
    }
}
function limparCampos () {
    textoSaida = document.querySelector("h3#resp");
    textoSaida.innerHTML = "";
}
btnVerificar = document.querySelector("button#btnVerificar");
btnVerificar.addEventListener('click', main);