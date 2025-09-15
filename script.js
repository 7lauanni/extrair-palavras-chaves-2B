import {PALAVRAS_RUINS} from "./palavrasruins.js";

const BotaoMostraPalavraa = document.querySelector ('#botao-palavrachave');

BotaoMoatraPalavra.addEventListener ('click' ,MostraPalavrasChaves);

function MostraPalavrasChaves (){
    const texto = document.querySelector ('entrada-de-texto').value;
    const campoRsultade=document.querySelector('#resultado-palavrachave');
    const palavraChave=processaTexto(texto);

    campoResultado.textContent=palavraChave.join(",");
}

function processaTexto(texto){
    let palavras = texto.splir(/\P(L)+/u);

for (let i in palavras ){
    palavras [i] = palavras [i]. toLowerCastel();
}
}