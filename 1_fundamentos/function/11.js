// Reverter String Crie uma função que receba uma string como argumento e retorne a string invertida.

function reverteString(str) {
    return str.split('').reverse().join('-');
}

console.log(reverteString("Mariana"))