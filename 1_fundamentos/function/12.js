// Fatorial de um Número Crie uma função que receba um número n e retorne o fatorial de n. 
// O fatorial de n é o produto de todos os números inteiros de 1 até n

function fatorial(n) {
    let resposta = 1;
    for(let i = n; i > 1; i--) {
        resposta *= i;
    }
    return resposta;
}

console.log(fatorial(5))
