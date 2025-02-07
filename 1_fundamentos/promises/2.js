function doPedido() {
    return new Promise ((resolve, reject) => {
        let tempoPreparo = Math.floor(Math.random() * 5000) + 1000;

        setTimeout(() => {
            if (tempoPreparo < 4000) {
                resolve (`Pedido feito com sucesso ${tempoPreparo / 1000} de segundos`)
            } else {
                reject (`Pedido falhou ${tempoPreparo / 1000} de segundos`)
            }
        }, tempoPreparo);

    });
}

doPedido()
    .then(mensagem => console.log("CERTO", mensagem))
    .catch(error => console.log("error", error))