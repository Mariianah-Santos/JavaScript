let txts = ["Mariana", "Lele", "Mariza"];

function a(letra) {
    return letra.includes('a');
}

let aFilter = txts.filter(a);

console.log(aFilter)