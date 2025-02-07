function dado() {
    return new Promise((resolve, reject) => {
        let lados = Math.floor(Math.random() * 6) + 1;

        if (lados <= 5) {
            resolve(`NUMERO CHAMADO ${lados}`);
        } else {
            reject (`NUMERO CHAMADO ${lados}`)
        }
    });
}

dado()
    .then(msg => console.log("VOCE VENCEU", msg))
    .catch(error => console.log("NPC VENCEU", error))