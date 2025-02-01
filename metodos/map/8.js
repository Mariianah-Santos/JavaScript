let numero = [1, 2, 3, 4, 5];

function fah(c) {
    return (c * 9/5) + 32;
}

let fahMap = numero.map(fah);

console.log(fahMap)