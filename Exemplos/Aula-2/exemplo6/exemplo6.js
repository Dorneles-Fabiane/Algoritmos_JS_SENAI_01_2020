function validar(){
    var experiencia = document.getElementById("experiencia");
    var rbmasc = document.getElementById("rbmasc");
    var rbfem = document.getElementById("rbfem");

    var res = document.querySelector('div#resultado');
    res.style.textAlign = 'center';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    img.setAttribute('width', 640);
    img.setAttribute('height',427)


    if (Number(experiencia.value)<0 || Number(experiencia.value)>100)
    {
        window.alert("Experiência Inválida! Digite novamente.");
        return;
    }
    if (rbmasc.checked==false && rbfem.checked==false)
    {
        window.alert("Selecione um dos sexos!");
        return;
    }

    var anos_experiencia = Number(experiencia.value)
    if (rbmasc.checked == true){
        if (anos_experiencia >=0 && anos_experiencia <10){
            img.setAttribute('src', 'img/junior_homem.jpg');
            res.innerHTML = "Parabéns! Você foi selecionado(a) para a próxima etapa.";
        }
        else if (anos_experiencia >= 10 && anos_experiencia <=90){
            img.setAttribute('src', 'img/senior_homem.jpg');
            res.innerHTML = "Parabéns! Você foi selecionado(a) para a próxima etapa.";
        }
        else{
            img.setAttribute('src', 'img/nao_selecionado.jpg');
            res.innerHTML = "Sinto muito! Você não foi selecionado(a) para a próxima etapa.";
        }
    }

    if (rbfem.checked == true){
        if (anos_experiencia >=0 && anos_experiencia <10){
            img.setAttribute('src', 'img/junior_mulher.jpg');
            res.innerHTML = "Parabéns! Você foi selecionado(a) para a próxima etapa.";
        }
        else if (anos_experiencia >= 10 && anos_experiencia <=90){
            img.setAttribute('src', 'img/senior_mulher.jpg');
            res.innerHTML = "Parabéns! Você foi selecionado(a) para a próxima etapa.";
        }
        else {
            img.setAttribute('src', 'img/nao_selecionado.jpg');
            res.innerHTML = "Sinto muito! Você não foi selecionado(a) para a próxima etapa.";
        }
    }
    res.appendChild(img);
}
var btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click",validar);