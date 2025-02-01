let numeros = [1, 9, 8, 0];

function zero(num) {
    return num !== 0;
}

let numMap = numeros.map(zero);

console.log(numMap)