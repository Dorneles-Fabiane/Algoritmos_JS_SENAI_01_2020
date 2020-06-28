let vetClubes = [];
let clube = document.querySelector("input#clube");
let res = document.querySelector("pre#res");
let tab = document.querySelector("pre#tab");

function adicionaClube() {
    tab.textContent = "";
    res.textContent = "";

    if (clube.value == "") {
        alert("Por favor, informe o nome do clube!");
    }
    else {
        vetClubes.push(clube.value);
    } 
    limpaCampos ();
}

function listaClubes() {
    tab.textContent = "";

    if (vetClubes.length == "") {
        alert("Não há clubes na lista!");
        limpaCampos();
        return;
    }
    else {
        let cont = 1;

        for (pos in vetClubes) {
            tab.textContent += `\n ${cont}. ${vetClubes[pos]}`;
            cont++;
        }
    }
    limpaCampos ();
}

function montaTabela() {
    res.textContent = ""; 

    if ((vetClubes.length%2)!=0){
        alert("É necessário um número par de times.");
        limpaCampos();
        return;
    }
    else {
       let tam = vetClubes.length;

       for (let cont = 0; cont < tam; cont++) {
        res.textContent +=`\n${vetClubes[cont]} X ${vetClubes[tam-1]}`;
        tam--; 
       }
    }
}

function limpaCampos() {
    clube.value = "";
    clube.focus();
}

btAdicionar = document.querySelector("button#btAdicionar");
btAdicionar.addEventListener('click', adicionaClube);

btListar = document.querySelector("button#btListar");
btListar.addEventListener('click', listaClubes);

btMontar = document.querySelector("button#btMontar");
btMontar.addEventListener('click', montaTabela);