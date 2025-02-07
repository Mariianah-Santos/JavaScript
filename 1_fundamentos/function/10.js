// Reverter String Crie uma função que receba uma string como argumento e retorne a string invertida.

function reverteString(str) {
    let resultado = '';
    for(let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado
}

console.log(reverteString("Mariana"))