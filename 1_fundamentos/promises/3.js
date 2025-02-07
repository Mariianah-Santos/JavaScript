function right() {
    return new Promise((resolve, reject) => {

        let tempoCorrido = Math.floor(Math.random() * 3000) + 1000;

        setTimeout(() => {
            if (tempoCorrido < 3000) {
                resolve(` COM ${tempoCorrido / 1000} DE SEGUNDOS`)
            } else {
                reject (`COM ${tempoCorrido / 1000}`)
            }
        }, tempoCorrido)
    });
}

right()
    .then(mensagem => console.log("DEU CERTO", mensagem))
    .catch(error => console.log("ERROR", error))