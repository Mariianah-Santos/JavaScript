function inverter(texto) {
    let txt = "";

    for (let i = texto.length - 1; i >= 0; i--) {
        txt += texto[i];
    }

    return txt;
}

console.log(inverter("mariana"));