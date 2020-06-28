let vAvai = [];
let vFig = [];

let inAvai = document.querySelector("input#inAvai");
let inFig = document.querySelector("input#inFig");
let res = document.querySelector("pre#res");
let ver = document.querySelector("pre#ver");
let cont = 1 //Para exibir o número da partida de forma dinâmica. 

function adicionaPlacar() {
    avai = inAvai.value;
    fig = inFig.value;

    if (avai >=0 && avai <10 && avai.length != 0 && fig >=0 && fig <10 && fig.length != 0) {
        vAvai.push(avai);
        vFig.push(fig);

        res.innerText += `\nJogo ${cont} (Avaí x Figuerense): ${vAvai[cont-1]} x ${vFig[cont-1]}`;
        cont++
    }
    else {
        alert("Por favor, verifique se os valores digitados estão entre 0 e 9.");
    }

    limpaCampos();
}
function exibeResult () {
    vitAvai = 0;
    vitFig = 0;
    empate = 0;
    somaAv = 0;
    somaFig = 0;
    saldoAvai = 0;
    saldoFig = 0;
    
    if (vAvai.length==0 || vFig.length==0){
        alert("Não há jogos na lista...");
        return;
    }
    for (let pos = 0; pos < vAvai.length; pos++) {
        nGolsAvai = vAvai[pos];
        nGolsFig = vFig[pos];

        somaAv +=Number(nGolsAvai);
        somaFig +=Number(nGolsFig);

        if (nGolsAvai > nGolsFig) {
            vitAvai++;
        }
        else if (nGolsAvai < nGolsFig) {
            vitFig++;
        }
        else {
            empate++;
        }
    }
    saldoAvai = somaAv-somaFig;
    saldoFig = somaFig-somaAv;

    ver.innerText += `\nNúmero de vitórias Avaí --> ${vitAvai}`;
    ver.innerText += `\nNúmero de vitórias Figuerense --> ${vitFig}`;
    ver.innerText += `\nNúmero de empates --> ${empate}`;
    ver.innerText += `\nSaldo de gols Avai --> ${saldoAvai}`;
    ver.innerText += `\nSaldo de gols Figuerense --> ${saldoFig}`;
}
function limpaCampos () {
    inAvai.value = "";
    inFig.value = "";
    inAvai.focus();
}
btnAdicionar = document.querySelector("button#btnAdicionar");
btnAdicionar.addEventListener('click', adicionaPlacar);

btnVerificar = document.querySelector("button#btnVerificar");
btnVerificar.addEventListener('click', exibeResult);