function user() {
    return new Promise((resolve, reject) => {

        let tempo = Math.floor(Math.random() * 2000) + 1000;
        

        setTimeout(() => {
            if (tempo < 2000) {
                resolve(`COM SEGUNDOS ${tempo / 1000}`)
            } else {
                reject(`COM SEGUNDOS ${tempo / 1000}`)
            }
        }, tempo);
    });
}

let getUser= {
    id: 1,
    name: "Mariana"
}
user()
    .then(msg => console.log(`USUARIO CARREGAO: ${getUser.name}` ,msg))
    .catch(error => console.log("ERROR", error))