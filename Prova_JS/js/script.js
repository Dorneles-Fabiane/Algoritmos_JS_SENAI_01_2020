let vetGabarito = [];
let vetListaResp = [];

let inGabarito = document.querySelector("input#gabarito");
let inListaResp = document.querySelector("input#listaResp");
let inNome = document.querySelector("input#nome");

let resp = document.querySelector("pre#resp");

let posVGab = 0;
let posVLi = 0;

let exibiu_resultado = 0;

function adicionaGab () {
    let gabarito = inGabarito.value.toUpperCase();

    if (gabarito == "A" || gabarito == "B" || gabarito == "C" || gabarito == "D" || gabarito == "E") {
        if (vetGabarito.length <=9) {
            vetGabarito.push(gabarito);
            resp.textContent = `\nGabarito questão ${posVGab+1}: (${vetGabarito[posVGab]})`;
            posVGab++;
        }
        else {
            alert("O gabarito deve corresponder ao número de questões da prova (10 questões).");
            return;
        }
    }
    else {
        alert("Informação inválida! Informe uma das seguintes opções (A, B, C, D, E).");
        return;
    }
    limpaCampos();
    inGabarito.focus();
}

function adicionaRespAluno () {
    let listaResp = inListaResp.value.toUpperCase();

    if (listaResp == "A" || listaResp == "B" || listaResp == "C" || listaResp == "D" || listaResp == "E") {
        
        if (vetListaResp.length <= 9) {
            vetListaResp.push(listaResp);
            resp.textContent = `\nResposta aluno questão ${posVLi+1}:(${(vetListaResp[posVLi])})`;
            posVLi++;
        }
        else {
            alert("As respostas devem corresponder ao número de questões da prova (10 questões).");
            return;
        }
    }
    else {
        alert("Informação inválida! Informe uma das seguintes opções (A, B, C, D, E).");
        return;
    }
    inListaResp.focus();
    limpaCampos();
}


function exibeDados (){
    let nome = inNome.value;
    let cont = 1;

    resp.innerHTML = `<strong>Nome: ${nome}\n\n`
    resp.innerHTML += `<strong>Gabarito\t\tRespostas do Aluno </strong>\n`;

    for (pos in vetGabarito) {
        resp.innerHTML += `\nQuestão ${cont} (${vetGabarito[pos]})\t\tQuestão ${cont} (${vetListaResp[pos]})`;
        cont++;
    } 
}

function verificaResultados () {
    let acertos = 0;
    let erros = 0;
    let notaFinal = 1000;

    if (exibiu_resultado == 1) {return};

    if (vetGabarito.length == 10 && vetListaResp.length == 10) {
        for (pos in vetGabarito) {
            if (vetGabarito[pos] == vetListaResp[pos]) {
                acertos++;
            }
            else {
                erros++
                notaFinal = notaFinal - 100;
            }
        }
    }
    else {
        alert("Insira as 10 questões do gabarito e as 10 respostas do candidato para vizualizar os resultados.");
        return;
    }
    resp.innerHTML += `\n\nTotal de Acertos = ${acertos}\n`; 
    resp.innerHTML += `Total de Erros = ${erros}\n`;
    resp.innerHTML += `Nota Final do(a) aluno(a) ${nome.value} = ${notaFinal}`;
    exibiu_resultado = 1;
}

function limpaCampos() {
    inGabarito.value = "",
    inListaResp.value = "";
}
function limpaVetores () {
    vetGabarito = [];
    vetListaResp = [];
    resp.innerHTML = "";
    inNome.value = "";
    posVGab = 0;
    posVLi = 0;
    limpaCampos();
}

btAdicionarGab = document.querySelector("button#btAdicionarGab");
btAdicionarGab.addEventListener('click', adicionaGab);

btAdicionarResp = document.querySelector("button#btAdicionarResp");
btAdicionarResp.addEventListener('click', adicionaRespAluno);

btExibirDados = document.querySelector("button#btExibirDados");
btExibirDados.addEventListener('click', exibeDados);

btVerificar = document.querySelector("button#btVerificar");
btVerificar.addEventListener('click', verificaResultados);

btLimpaVetores = document.querySelector("button#btLimpaVetores");
btLimpaVetores.addEventListener('click', limpaVetores);