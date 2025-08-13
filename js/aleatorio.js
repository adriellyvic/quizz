// Lista de nomes e função para sortear um aleatório
const nomes = ["Périola", "Joacir", "Otavio", "Franciele", "Adrielly", "Victória", "Gabriel"];
function aleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}
const nome = aleatorio(nomes);
