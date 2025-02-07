// Contar Vogais Crie uma função que conte o número de vogais em uma string.

function vogais(str) {
    let cont = 0;
    let vogais ='aeiouAEIOU';

    for (let char of str) {
        if(vogais.includes(char)) {
            cont++
        };
    }

    return cont;
}

console.log(vogais("JAVA"))