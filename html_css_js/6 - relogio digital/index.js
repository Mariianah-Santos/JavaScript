
function attHora() {
    const atual = new Date();
    const hora = String(atual.getHours()).padStart(2, '0');
    const minutes = String(atual.getMinutes()).padStart(2, '0')
    const segundo = String(atual.getSeconds()).padStart(2, '0')
    const time = `${hora}:${minutes}:${segundo}`;
    document.getElementById('relogio').textContent = time;
}

setInterval(attHora, 1000);
attHora();