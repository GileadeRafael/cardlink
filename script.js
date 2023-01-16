function toggleMode () {
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains("light")) {
        // se tiver light mode, mudar para o ducksun
        img.setAttribute("src", "/assets/sunduck.png")
    } else {
        // se tiver dark mode, mudar para o duckmoon
        img.setAttribute("src", "/assets/moonduck.png")
    }
}