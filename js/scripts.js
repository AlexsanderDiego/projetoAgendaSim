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

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        drawer.classList.remove('active')
        setTimeout(() => {
            overlay.classList.remove('active')}, 700)
    }
})