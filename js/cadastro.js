let fazerCadastro = document.getElementById('fazerCadastro')

fazerCadastro.addEventListener('click', () => {
    validarInformacoes()
})

function validarInformacoes () {
    let aviso = document.getElementById('aviso')
    let nomeUsuario = document.getElementById('nomeUsuario')
    let nomeFilmeBr = document.getElementById('nomeFilmeBr')
    let nomeFilmeOrig = document.getElementById('nomeFilmeOrig')
    let nomeDiretor = document.getElementById('nomeDiretor')
    let dataDeEstreia = document.getElementById('dataDeEstreia')
    let classific = document.getElementById('classific')
    let genero = document.getElementById('genero')
    let idioma = document.getElementById('idioma')
    let termos = document.getElementById('termos')

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

    aviso.style.display = 'none'
    alert("Seu cadastro foi finalizado!")
}