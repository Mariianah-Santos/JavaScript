let promessa = new Promise((resolve, reject) => {
    let sucesso = false;

    if (sucesso) {
        resolve ('Deu certo!')
    } else {
        reject ("Falha!")
    }
})

.then(resultado => console.log(resultado))
.catch(erro => console.log(erro))