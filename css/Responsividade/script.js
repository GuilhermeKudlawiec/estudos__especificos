let show = true

const btnMobile = document.getElementById('btn-mobile')

function toggleMenu () {
    const nav = document.getElementById('nav')
    nav.classList.toggle('ativo')
    document.body.style.overflow = show ? "hidden" : "initial"
    show = !show
}

btnMobile.addEventListener('click', toggleMenu)
