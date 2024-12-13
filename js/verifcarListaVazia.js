const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");


export function veficarListaVazia(lista){
    
    if (lista.childElementCount === 0){
        mensagemListaVazia.style.display = "block";
    
    }else {
        mensagemListaVazia.style.display = "none";
    }
}