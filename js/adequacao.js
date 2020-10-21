let range = document.getElementById("valorSimulacao");
let saida = document.getElementById("valor");
saida.innerHTML = range.value;

range.oninput = function() {
    saida.innerHTML = this.value;
}

let range1 = document.getElementById("qtdParcelas");
let saida1 = document.getElementById("valorParcelas");
saida1.innerHTML = range1.value;

range1.oninput = function() {
    saida1.innerHTML = this.value;
}



