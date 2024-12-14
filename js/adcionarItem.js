import { criarItemDaLista } from "./criarItemDaLista.js";
import { veficarListaVazia } from "./verifcarListaVazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");


export function adicionarItem(evento) {
    evento.preventDefault()

    if(item.value === "") {
        alert("Por favor insira um item!");
        return;
    }

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    veficarListaVazia(listaDeCompras);
    item.value = "";

}

export { listaDeCompras };