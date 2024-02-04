const imagemVisualizada = document.getElementById('imagem-visualizada');

let imagemSelecionada = 0;
idOpSelecionada = document.querySelector("[name='opcao']:checked").id



function trocarImagem(){
    idOpSelecionada = document.querySelector("[name='opcao']:checked").id
    imagemSelecionada = idOpSelecionada.charAt(0);
    imagemVisualizada.src ="imagens/imagem-"+imagemSelecionada+".svg"
}


function AdicionarValor(){
    let atual = document.getElementById('total').value;
   let novo = atual - (-1);
   document.getElementById('total').value = novo;
}

function MenosValor(){
    let atual = document.getElementById('total').value;
    if(atual>0){
        let novo = atual - 1;
        document.getElementById('total').value = novo;
    }
}