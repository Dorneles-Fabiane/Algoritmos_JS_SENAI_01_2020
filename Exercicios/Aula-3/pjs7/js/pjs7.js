function verificaTriangulo() {
    var txtalpha = document.getElementById("txtalpha");
    var txtbeta = document.getElementById("txtbeta");
    var txtgama = document.getElementById("txtgama");
    var resp = document.getElementById("msg");
    var tipo = document.getElementById("tipo");
    var img = document.createElement("img")

    img.setAttribute('id', 'triangulo');

    var alpha = Number(txtalpha.value);
    var beta = Number(txtbeta.value);
    var gama = Number(txtgama.value);

    if (alpha == 0 || beta == 0 || gama == 0 || isNaN(alpha) || isNaN(beta) || isNaN(gama)) {
        window.alert("Informe ângulos válidos!")
    }
    else if ((alpha + beta + gama) == 180)
    {
        resp.innerHTML = `<strong>Os ângulos podem formar um triângulo!</strong>`
        resp.style.textAlign = 'center';
        resp.style.margin = '15px'

        if (alpha == 90 || beta == 90 || gama == 90) {
            tipo.innerHTML = "Tipo: Retângulo";
            tipo.style.textAlign = 'center';
            img.setAttribute('src', 'img/triangulo-retangulo.jpg');
            resp.appendChild(img);
        }
        else if (alpha < 90 && beta < 90 && gama < 90) {
            tipo.innerHTML = "Tipo: Acutângulo";
            img.setAttribute('src', 'img/triangulo-acutangulo.jpg');
            resp.appendChild(img);
        }
        else if ((alpha > 90 && alpha < 180) || (beta > 90 && beta < 180) || (gama > 90 && gama < 180)) {
            tipo.innerHTML = "Tipo: Obtusângulo";
            img.setAttribute('src', 'img/triangulo-obtusangulo.jpg');
            resp.appendChild(img);
        }
    }
    else {
        resp.innerHTML = `<strong>Os ângulos não formam um triângulo!</strong>`;
        resp.style.textAlign = 'center';
        resp.style.margin = '15px'
    }
    
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificaTriangulo);