let txts = ["CAO", "CACHORRO", "GATO", "PATO", "SALAMANDRA"]

function caracter(txt) {
    return txt.length < 5;
}

let caracterFilter = txts.filter(caracter)

console.log(caracterFilter)