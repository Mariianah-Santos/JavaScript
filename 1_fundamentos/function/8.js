// Maior Número em um Array Crie uma função que receba um array de números e retorne o maior número desse array.

function maiorNumero(numeros) {
    // let numeros = [10, 40, 8, 1];
    let maior = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    return maior
}

console.log(maiorNumero([10, 40, 8, 1]))