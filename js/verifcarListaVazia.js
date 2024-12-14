const mensagemListaVazia = document.getElementById("mensagem-lista-vazia");


export function veficarListaVazia(lista){
    
    if (lista.querySelectorAll("li").length === 0){
        mensagemListaVazia.style.display = "block";
    
    }else {
        mensagemListaVazia.style.display = "none";
    }
}