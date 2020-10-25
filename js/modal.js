
//MODAL ADEQUAÇÃO

const modal1 = document.getElementById("modalAdequacao");

const btn1 = document.getElementById("btnModalAdequacao");

const fechar1 = document.getElementsByClassName("btn-fechar1")[0];

btn1.onclick = function() {
    modal1.style.display = "block";
}

fechar1.onclick = function() {
    modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


// MODAL DADOS INICIAL

const modal = document.getElementById("modalCadastro");

const btn = document.getElementById("btnCadastro");

const fechar = document.getElementsByClassName("btn-fechar")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

fechar.onclick = function() {
    modal.style.display = "none";
}




//MÁSCARAS DE INPUT
const masks = {
    cpf (value) {
        return value
            .replace(/\D/g, '') 
            .replace(/(\d{3})(\d)/, '$1.$2') 
            .replace(/(\d{3})(\d)/, '$1.$2') 
            .replace(/(\d{3})(\d{1,2})/, '$1-$2') 
            .replace(/(-\d{2})\d+?$/, '$1') 
    },

    celular (value) {
        return value
            .replace(/\D/g, '') 
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2') 
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3') 
            .replace(/(-\d{4})\d+?$/, '$1') 
    },
    
    cep (value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1')
    },

    rg (value) {
        return value
        .replace(/\D/g, '') 
        .replace(/(\d{3})(\d)/, '$1.$2') 
        .replace(/(\d{3})(\d)/, '$1.$2') 
        .replace(/(\d{3})(\d{1,2})/, '$1-$2') 
        .replace(/(-\d{2})\d+?$/, '$1') 
    }
}

document.querySelectorAll('input').forEach(($input) =>{
    const field = $input.dataset.js
    
    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

