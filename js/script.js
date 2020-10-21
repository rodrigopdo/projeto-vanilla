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

