let letras = ['a', 'v', 'a', 'c'];
let cont = {};


letras.forEach(function(letra) {
    if(cont[letra]) {
        cont[letra]++;
    } else {
        cont[letra] = 1;
    }
})

console.log(cont)
