let pessoas = [
    {
        nome: "Mariana", idade: 24

    }, {
        nome: "Mariza", idade: 24
    }

]

function name(pessoa) {
    return pessoa.nome
}

let nameMap = pessoas.map(name);

console.log(nameMap)