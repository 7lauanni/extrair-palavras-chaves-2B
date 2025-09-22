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

palavras = tirapalavrasRuins(palavras);

const frequencias = contaFrequencia(frequencia).short(ordenaPalavra);
let ordenadas = Object.keys(frequencia) .short(ordenaPalavra);

function ordenaPalavra(p1.p22){
    return frequencias[p2] - frequencias[p1]
}

return ordenadas.slice(0,10);
}

function contaFrequencia(palavras){
let frequencia = {};
for (let i of palavras) {
frequencias[1] =0;
for (let j of palavras) {
if (i == j){
      frequencias
         }
      }
    }
return frequencias;
}

function tirapalavrasRuins(palavras){
    const palavrasBoas = [];
    for (let palavras of palavras){
        if (!PALAVRAS_RUINS.has(palavra) && palavra.length >2){
            palavrasBoas.push(palavra);
        }
    }
    return palavrasBoas
}