let numeros = [1, 2, 4, 6, 10, 11, 13];
let pariedade = [];

numeros.forEach(function(num) {
    pariedade.push(num % 2 == 0 ? "PAR" : "IMPAR");
})

console.log(pariedade)