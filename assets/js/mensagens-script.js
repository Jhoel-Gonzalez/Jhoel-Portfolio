const mensagens = localStorage.getItem("mensagem");
const objeto = JSON.parse(mensagens);
const listaMensagens = document.querySelector("#lista-mensagens");
const botaoLimpar = document.querySelector("#botao-limpar");

let contador = 0;

for (let mensagem of objeto) {
    contador++;
    let pessoa = document.createElement("tr");
    pessoa.innerHTML = `<th scope="row">${contador}</th>
                        <td>${mensagem.nome}</td>
                        <td>${mensagem.email}</td>
                        <td>${mensagem.mensagem}</td>`;
    listaMensagens.appendChild(pessoa);
};

botaoLimpar.addEventListener("click", (event) => {
    event.preventDefault();

    localStorage.clear();
    location.reload();
});
