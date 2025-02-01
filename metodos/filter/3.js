let idades = [22, 25, 56, 21, 10, 12, 15, 18]; // criando o array

function maiorIdade(idade) { // criando a funcao que vai fazer a verificação se o usuario é maior ou igual a 18
    return idade >= 18;
}

let idadeFilter = idades.filter(maiorIdade); // usando o metodo filter para puxar so as idades maiores ou igual a 18

console.log(idadeFilter)