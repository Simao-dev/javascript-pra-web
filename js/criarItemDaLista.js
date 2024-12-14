import { verificarListaComprados } from "./verificarListaComprados.js";
import { listaDeCompras } from "./adcionarItem.js";3
import { excluirItem } from "./excluirItem.js";
import { EditarItem } from "./editarItem.js";
import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js";

const listaComprados = document.getElementById("lista-comprados")
let contador = 0;

export function criarItemDaLista(item) {
    const itemDaLista = document.createElement("li"); //cria a li que vai conter as listas de itens
    const containerItemLista = document.createElement("div"); // cria a div item-lista-container
    containerItemLista.classList.add("lista-item-container"); // acessa a lista de classes da (div) e adiciona a classe da div

    const containerNomeDoItem = document.createElement("div"); // cria a div container-nome-compra

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado =  evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")

        if(checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }

        verificarListaComprados(listaComprados)
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);

    const nomeDoItem = document.createElement("p"); //cria o paragrafor onde vai ficar o nome do item
    nomeDoItem.id = "item-titulo"; 
    nomeDoItem.innerText = item; // inserindo no paragrafo o valor digitado pelo usuário no input
    containerNomeDoItem.appendChild(nomeDoItem); // coloca paragrafo(p) dentro do container nome do item

    const containerBotoes = document.createElement("div"); //cria a (div) que container que armazena os botões
    const botaoRemover = document.createElement("button"); //cria o (button) dentro da div
    botaoRemover.classList.add("item-lista-button"); //adiciona a classe (botao-acao)

    const imagemRemover = document.createElement("img"); // cria a tag (img)
    imagemRemover.src = "img/delete.svg"; //adiciona a imagem que a tag (img) vai receber
    imagemRemover.alt = "Remover"; //texto alternativo

    botaoRemover.addEventListener("click", function() {
        excluirItem(itemDaLista)
    })

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);
    
    const botaoEditar = document.createElement("button"); //cria o (button) dentro da div
    botaoEditar.classList.add("item-lista-button"); //adiciona a classe (botao-acao)

    const imagemEditar = document.createElement("img"); // cria a tag (img)
    imagemEditar.src = "img/edit.svg"; //adiciona a imagem que a tag (img) vai receber
    imagemEditar.alt = "Editar"; //texto alternativo

    botaoEditar.addEventListener("click", function(){
        EditarItem(itemDaLista)
    })
   
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem)
    containerItemLista.appendChild(containerBotoes)

    const itemData = document.createElement("p");
    itemData.textContent = gerarDiaDaSemana();
    itemData.classList.add("texto-data");

    
    itemDaLista.appendChild(containerItemLista); //coloca a (div) dentro do (li)lista
    itemDaLista.appendChild(itemData)
    
    return itemDaLista;
}