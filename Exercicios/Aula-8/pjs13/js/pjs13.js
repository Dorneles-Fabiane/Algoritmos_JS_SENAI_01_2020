let vNome = [];
let vNota1 = [];
let vNota2 = [];
let vMedia = [];

let txtnome = document.querySelector("input#nome");
let txtnota1 = document.querySelector("input#txtnota1");
let txtnota2 = document.querySelector("input#txtnota2");
let resp = document.querySelector("pre#resp");

resp.textContent = "\nNome\t\t\tNota1\t\tNota2";

function adicionaNota () {    

    let nota1 = Number(txtnota1.value);
    let nota2 = Number(txtnota2.value);
    let nome = txtnome.value;

    if (Number(nota1) && Number(nota2) && nome.length !="") {
        if(vNome.length < 5) {
            vNome.push(nome);
            vNota1.push(nota1);
            vNota2.push(nota2);
            vMedia.push((nota1+nota2)/2);
            resp.textContent += "\n" + nome + "\t\t\t" + nota1 + "\t\t" + nota2;
        }
        else {
            alert("Máximo 5 alunos.");
        }
    }
    else {
        alert("[ERRO] Verifique se todos os campos foram preenchidos corretamente.");
    }
    limpaCampos ()
    
}
function calculaMedia () {
    respVerificar = "";
    
    for(pos = 0; pos < vNome.length; pos++){
        respVerificar += "Nome: " + vNome[pos] + "\n" + "Nota1: " + vNota1[pos] + "\n" + "Nota2: " + vNota2[pos] + "\n" + "Média " + vMedia[pos] + "\n\n";
    }
    alert(respVerificar);
    
}
function limpaCampos () {
    txtnome.value = "";
    txtnota1.value = "";
    txtnota2.value = "";

    txtnome.focus();
}
function limpar() {
 vNome = [];
 vNota1 = [];
 vNota2 = [];
 vMedia = [];

 resp.textContent = "";

 resp.textContent = "\nNome\t\t\tNota1\t\tNota2";
}
btnAdiconar = document.querySelector("button#btnAdicionar");
btnAdiconar.addEventListener('click', adicionaNota)

btnVerificar = document.querySelector("button#btnVerificar");
btnVerificar.addEventListener('click', calculaMedia);

btnLimpar = document.querySelector("button#btnLimpar");
btnLimpar.addEventListener('click', limpar);
