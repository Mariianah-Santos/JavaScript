let npc = Math.floor(Math.random() * 10) + 1;
function teste() {
    const span = document.getElementById('npc').innerHTML = npc;
    const valor = document.getElementById('number').value; 
    if (valor != span) {
        alert("ERROU")
        return false;
    } else {
        alert("ACERTOU")
        return true;
    }

}