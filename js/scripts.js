novoMedico.onclick = () => {
    overlay.classList.add('active')
    drawer.classList.add('active')
}

fecharCriar.onclick = () => {
    setTimeout (() => {
        overlay.classList.remove('active')}, 500)
    drawer.classList.remove('active')
}

overlay.onclick = () => {
    setTimeout (() => {
        overlay.classList.remove('active')}, 500)
    drawer.classList.remove('active')
}

// 5274 9613 1689 1929 0330 0308