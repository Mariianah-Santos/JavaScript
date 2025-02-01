let numero = [1, 4, 25, 6, 10];


function raiz(num) {
    return Math.sqrt(num);

    // ou return num * num
}

let raizMap = numero.map(raiz);

console.log(raizMap)