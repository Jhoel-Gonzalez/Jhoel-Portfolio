const formBtn = document.querySelector(".buttons-bg-color");
const formulario = document.querySelector(".largura-formulario")
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputMensagem = document.querySelector("#textarea");

formBtn.addEventListener("click", function (event) {
    event.preventDefault;

    const mensagem = {
        nome: inputNome.value,
        email: inputEmail.value,
        mensagem: inputMensagem.value
    };

    const mensagens = localStorage.getItem('mensagem') ? JSON.parse(localStorage.getItem('mensagem')) : [];
    mensagens.push(mensagem);

    localStorage.setItem('mensagem', JSON.stringify(mensagens));

    formulario.reset();
});