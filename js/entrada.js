let nome = document.getElementById('nomeUsuario')

nome.addEventListener("keypress", (event) => {
    let titulo = document.getElementById("titulo")

    titulo.innerText += event.key
})