const item = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()

    const itemDaLista = document.createElement("li"); //cria a li que vai conter as listas de itens
    const containerItemLista = document.createElement("div"); // cria a div item-lista-container
    containerItemLista.classList.add("lista-item-container"); // acessa a lista de classes da (div) e adiciona a classe da div

    const containerNomeDoItem = document.createElement("div"); // cria a div container-nome-compra
    const nomeDoItem = document.createElement("p"); //cria o paragrafor onde vai ficar o nome do item 
    nomeDoItem.innerText = item.value; // inserindo no paragrafo o valor digitado pelo usuário no input
    containerNomeDoItem.appendChild(nomeDoItem); // coloca paragrafo(p) dentro do container nome do item

    const containerBotoes = document.createElement("div"); //cria a (div) que container que armazena os botões
    const botaoRemover = document.createElement("button"); //cria o (button) dentro da div
    botaoRemover.classList.add("item-lista-button"); //adiciona a classe (botao-acao)

    const imagemRemover = document.createElement("img"); // cria a tag (img)
    imagemRemover.src = "img/delete.svg"; //adiciona a imagem que a tag (img) vai receber
    imagemRemover.alt = "Remover"; //texto alternativo

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button"); //cria o (button) dentro da div
    botaoEditar.classList.add("item-lista-button"); //adiciona a classe (botao-acao)

    const imagemEditar = document.createElement("img"); // cria a tag (img)
    imagemEditar.src = "img/edit.svg"; //adiciona a imagem que a tag (img) vai receber
    imagemEditar.alt = "Editar"; //texto alternativo

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    

    containerItemLista.appendChild(containerNomeDoItem)
    containerItemLista.appendChild(containerBotoes)
    itemDaLista.appendChild(containerItemLista); //coloca a (div) dentro do (li)lista
    listaDeCompras.appendChild(itemDaLista)

}