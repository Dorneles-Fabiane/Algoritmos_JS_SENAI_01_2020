function categorizarAluno () {
    var nome = document.getElementById("nome").value;
    var txtidade = document.getElementById("txtidade");
    var resp = document.getElementById("resp");

    var idade = Number.parseInt(txtidade.value);

    if (idade < 0 || isNaN(idade)) {
        window.alert("[ERRO] Por favor, preencha todos os campos.");
        return;
    }
    else {
        if (idade <= 12) {
            categoria = "Categoria: Infantil";
        }
        else if (idade <= 18) {
            categoria = "Categoria: Juvenil";
        }
        else {
            categoria = "Categoria: Adulto";
        }
    }
    
    /*
    Dúvida - Como escrever os traços com o mesmo tamanho das letras? -- Ok, duvida respondida em aula.
    */
    var tracos = retornarTracos(nome);
    resp.textContent = nome + "\n" + tracos + "\n" + categoria;
}

function retornarTracos (nome) {
    var nLetras = nome.length;
    var tracos = "";

    for (var cont =0; cont < nLetras; cont++) {
        if (nome.charAt(cont) != " ") {
            tracos += "-";
        } 
        else 
        {
            tracos += " ";
        }
    }
    return tracos;
}
var btnCategorizar = document.getElementById("btnCategorizar");
btnCategorizar.addEventListener("click", categorizarAluno)