import { perguntasCorinthians } from "./perguntas.js";
import { embaralhar } from "./aleatorio.js";

// Seletores de elementos
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let historiaFinal = "";

// Substitui "você" pelo nome escolhido
function substituiNome() {
    perguntas.forEach(p => {
        p.enunciado = p.enunciado.replace(/você/g, nome);
    });
}
substituiNome();

// Inicia o jogo
botaoIniciar.addEventListener("click", () => {
    telaInicial.style.display = "none";
    caixaPrincipal.style.display = "block";
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
});

// Mostra pergunta
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => {
            historiaFinal += aleatorio(alternativa.afirmacao) + " ";
            if (alternativa.proxima !== undefined) {
                atual = alternativa.proxima;
                mostraPergunta();
            } else {
                mostraResultado();
            }
        });
        caixaAlternativas.appendChild(botao);
    });
}

// Mostra resultado final
function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = "";
    caixaResultado.classList.add("mostrar");
}

// Botão de jogar novamente
botaoJogarNovamente.addEventListener("click", () => {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
});
