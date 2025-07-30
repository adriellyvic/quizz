const nomes = ["Maura", "Lucas", "Pérola", "Nicolas", "João", "Victória", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)