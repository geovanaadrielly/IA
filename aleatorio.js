const nomes = ["Fernanda","Juliana","Maria luiza","Marcelo","Amanda","Gustavo","Gabriel"];

export function aleatorio (lista){
    const posicao =  Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);