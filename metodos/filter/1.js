let numeros = [1, 2, 4, 6, 10, 11, 3];

function pares(num) {
    return num % 2 == 0;
}

let parFilter = numeros.filter(pares);

console.log(parFilter)
