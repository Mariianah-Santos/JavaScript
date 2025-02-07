function gerar() {
    let caracter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@";
    let gerador = [];
    
    for (let i = 1; i <= 8; i++) {
        let password = Math.floor(Math.random() * caracter.length)
        gerador.push(caracter[password])
    }

    document.getElementById('password').textContent = gerador.join('');
    
}