let txts = ["aprendendo", "js", "com", "IA" ];

function somaTxt(acumulador, valorAtual) {
    return acumulador + " " + valorAtual;
}

let reduce = txts.reduce(somaTxt, "");

console.log(reduce.trim())