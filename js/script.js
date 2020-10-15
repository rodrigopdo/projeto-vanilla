/* INÍCIO MODAL CADASTRO===============================================*/

const modal = document.getElementById("modal-cadastro");

const btn = document.getElementById("btn-cadastro");

const fechar = document.getElementsByClassName("btn-fechar")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

fechar.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* FIM MODAL CADASTRO=======================================================*/

/* INÍCIO SIMULAÇÃO ADEQUACAO===============================================*/

let slider = document.getElementById("valorSimulacao");
let output = document.getElementById("valor");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}

let slider1 = document.getElementById("qtdParcelas");
let output1 = document.getElementById("valorParcelas");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
    output1.innerHTML = this.value;
}

$(function() {
      $( "#calendarioAdequacao" ).datepicker();
});

/*FIM SIMULAÇÃO ADEQUACAO===============================================*/
