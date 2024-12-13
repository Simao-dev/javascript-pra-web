import { adicionarItem } from "./js/adcionarItem.js";
import { verificarListaComprados } from "./js/verificarListaComprados.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);

const listaComprados = document.getElementById("lista-comprados");
verificarListaComprados(listaComprados)