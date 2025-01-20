let fazerCadastro = document.getElementById('fazerCadastro')

fazerCadastro.addEventListener('click', () => {
    validarInformacoes()
})

function validarInformacoes () {
    var aviso = document.getElementById('aviso')
    var nomeUsuario = document.getElementById('nomeUsuario')
    var nomeFilmeBr = document.getElementById('nomeFilmeBr')
    var nomeFilmeOrig = document.getElementById('nomeFilmeOrig')
    var nomeDiretor = document.getElementById('nomeDiretor')
    var dataDeEstreia = document.getElementById('dataDeEstreia')
    var classific = document.getElementById('classific')
    const selecionado = document.querySelector('input[name="classific"]:checked');
    var genero = document.getElementById('genero')
    var idioma = document.getElementById('idioma')
    const checkboxes = document.querySelectorAll('.idioma');
    const idiomasSelecionados = [];
    var termos = document.getElementById('termos')

    if(nomeUsuario.value == '') {
        nomeUsuario.style.borderColor = 'red'
        aviso.style.display = 'flex'
        return
    } else {
        nomeUsuario.style.borderColor = "green"
    }

    if(nomeFilmeBr.value == '') {
        nomeFilmeBr.style.borderColor = 'red'
        aviso.style.display = 'flex'
        return
    } else {
        nomeFilmeBr.style.borderColor = "green"
    }

    if(nomeFilmeOrig.value == '') {
        nomeFilmeOrig.style.borderColor = 'red'
        aviso.style.display = 'flex'
        return
    } else {
        nomeFilmeOrig.style.borderColor = "green"
    }

    if(nomeDiretor.value == '') {
        nomeDiretor.style.borderColor = 'red'
        aviso.style.display = 'flex'
        return
    } else {
        nomeDiretor.style.borderColor = "green"
    }

    if(dataDeEstreia.value == '') {
        dataDeEstreia.style.borderColor = 'red'
        aviso.style.display = 'flex'
        return
    } else {
        dataDeEstreia.style.borderColor = "green"
    }

    if(genero.value == 'Genero') {
        genero.style.borderColor = 'red'
        aviso.style.display = 'flex'
        return
    } else {
        genero.style.BorderColor = 'green'
    }

    if(!idioma.checked) {
        idioma.style.borderColor = 'red'
        aviso.style.display = 'flex'
        return
    } else {
        idioma.style.borderColor = 'green'
    }

    if(!termos.checked) {
        termos.style.color = 'red'
        aviso.style.display = 'flex'
        return
    } else {
        termos.style.borderColor = 'green'
    }

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            idiomasSelecionados.push(checkbox.value);
        }
    });
    
    localStorage.setItem("Nome de Usuário", nomeUsuario.value);
    localStorage.setItem("Nome do filme no Brasil", nomeFilmeBr.value);
    localStorage.setItem("Nome do filme original", nomeFilmeOrig.value);
    localStorage.setItem("Nome do Diretor", nomeDiretor.value);
    localStorage.setItem("Data da estreia", dataDeEstreia.value);
    localStorage.setItem("Classificação", selecionado.value);
    localStorage.setItem("Gênero", genero.value);
    localStorage.setItem("Idiomas", JSON.stringify(idiomasSelecionados));

    aviso.style.display = 'none'
    alert("Seu cadastro foi finalizado!")
}