let idades =[ 
    {idade: 22},
    {idade: 21},
    {idade: 17},
    {idade: 18}
]

function maiorIdade(pessoa) {
    return pessoa.idade >= 18;
}

let idadeFilter = idades.filter(maiorIdade);

console.log(idadeFilter)