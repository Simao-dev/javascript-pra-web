import { criarItemDaLista } from "./criarItemDaLista.js";
import { veficarListaVazia } from "./verifcarListaVazia.js";

const item = document.getElementById("input-item");

const listaDeCompras = document.getElementById("lista-de-compras");


export function adicionarItem(evento) {
    evento.preventDefault()

    const itemDaLista = criarItemDaLista(item.value);
    listaDeCompras.appendChild(itemDaLista);
    veficarListaVazia(listaDeCompras);

}

export { listaDeCompras };