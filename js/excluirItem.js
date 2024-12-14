import { veficarListaVazia } from "./verifcarListaVazia.js";
import { verificarListaComprados } from "./verificarListaComprados.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados")

const excluirItem = (elemento) => {
    let confirmacao = confirm("Tem certeza que deseja excluir esse item?");
    
    if(confirmacao) {
        elemento.remove();

        veficarListaVazia(listaDeCompras)
        verificarListaComprados(listaComprados)
    }
}

export { excluirItem };