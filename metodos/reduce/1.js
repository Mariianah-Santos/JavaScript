let numeros = [1, 2, 3, 4, 5];

function soma(acumulador, valorAtual) {
    return acumulador + valorAtual;
}

let reduce = numeros.reduce(soma, 0);

console.log(reduce)