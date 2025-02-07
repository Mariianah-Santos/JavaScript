// Somar Elementos de um Array Crie uma função que receba um array de números e 
// retorne a soma de todos os elementos do array.

function somaArray() {
    let array = [1,2,3];
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

console.log(somaArray());