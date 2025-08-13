import { perguntasCorinthians } from "./perguntas.js";
import { embaralhar } from "./aleatorio.js";

const botaoIniciar = document.getElementById("botao-iniciar");
const botaoReiniciar = document.getElementById("botao-reiniciar");
const caixaInicial = document.querySelector(".caixa-inicial");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoPergunta = document.getElementById("texto-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.getElementById("texto-resultado");

let indiceAtual = 0;
let afirmacoes = [];

// Iniciar quiz
botaoIniciar.addEventListener("click", () => {
    indiceAtual = 0;
    afirmacoes = [];
    caixaInicial.style.display = "none";
    caixaResultado.style.display = "none";
    caixaPerguntas.style.display = "block";
    mostrarPergunta(indiceAtual);
});

// Reiniciar quiz
botaoReiniciar.addEventListener("click", () => {
    caixaResultado.style.display = "none";
    caixaInicial.style.display = "block";
});

// Mostrar pergunta
function mostrarPergunta(indice) {
    const pergunta = perguntasCorinthians[indice];
    textoPergunta.textContent = pergunta.enunciado;
    caixaAlternativas.innerHTML = "";

    // Embaralhar alternativas
    const alternativasEmbaralhadas = embaralhar(pergunta.alternativas);

    alternativasEmbaralhadas.forEach((alternativa) => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => selecionarAlternativa(alternativa));
        caixaAlternativas.appendChild(botao);
    });
}

// Selecionar alternativa
function selecionarAlternativa(alternativa) {
    afirmacoes.push(...alternativa.afirmacao);

    if (alternativa.proxima !== undefined) {
        indiceAtual = alternativa.proxima;
        mostrarPergunta(indiceAtual);
    } else {
        mostrarResultado();
    }
}

// Mostrar resultado final
function mostrarResultado() {
    caixaPerguntas.style.display = "none";
    caixaResultado.style.display = "block";

    textoResultado.innerHTML = `
        <h2>Você decidiu o futuro do Corinthians!</h2>
        <ul>
            ${afirmacoes.map(item => `<li>${item}</li>`).join("")}
        </ul>
    `;
}
