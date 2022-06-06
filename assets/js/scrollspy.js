const sessoes = document.querySelectorAll(".main .fonte-especial")
const links = document.querySelectorAll(".navbar .collapse .nav-link")

window.onscroll = function () {
    sessoes.forEach(sessao => {
        let top = window.scrollY
        let offset = sessao.offsetTop
        let height = sessao.offsetHeight
        let id     = sessao.getAttribute('id')


        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active')
                document.querySelector(`.nav-link[href*=${id}]`).classList.add('active')
            })
        }
    })
}