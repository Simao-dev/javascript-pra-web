const containerListaDeComprados = document.getElementById("container-lista-comprados")

export function verificarListaComprados(lista){

    if (lista.childElementecount === 0) {

        containerListaDeComprados.style.display = "none";
    } else {
        containerListaDeComprados.style.display = "block";
    }
}