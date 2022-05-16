let itens = document.querySelectorAll('.nav-item a')
itens.forEach(links => {
    links.addEventListener('click', function () {
        itens.forEach(link => link.classList.remove('active'))
        this.classList.add('active')
    })
})

let menu = document.querySelector('.menu-btn ion-icon')

menu.addEventListener('click', () => {
    const nav = document.querySelector('.nav')
    nav.classList.toggle('on')
})


