import { gerarDiaDaSemana } from "./gerarDiaDaSemana.js"

export const EditarItem = (elemento) => {
    let novoItem = prompt("digite nome do novo item")

    if (novoItem !== null && novoItem.trim() !== ""){
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const estavaComprado = elemento.querySelector(".input-checkbox").checked;

        if (estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";

        }

        const dataDeCriacao = elemento.querySelector(".texto-data");
        dataDeCriacao.textContent = gerarDiaDaSemana();
    }
}

