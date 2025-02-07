const celulas = document.querySelectorAll('.celula');
let jogadorAtual = 'X';
const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function verificarVencedor() {
    for (const combinacao of combinacoesVencedoras) {
        const [a, b, c] = combinacao;
        if (
            celulas[a].textContent &&
            celulas[a].textContent === celulas[b].textContent &&
            celulas[a].textContent === celulas[c].textContent
        ) {
            alert(`Jogador ${jogadorAtual} venceu!`);
            reiniciarJogo();
            return;
        }
    }

    if ([...celulas].every(celula => celula.textContent)) {
        alert('Empate!');
        reiniciarJogo();
    }
}

function reiniciarJogo() {
    celulas.forEach(celula => (celula.textContent = ''));
    jogadorAtual = 'X';
}

celulas.forEach(celula =>
    celula.addEventListener('click', () => {
        if (celula.textContent === '') {
            celula.textContent = jogadorAtual;
            verificarVencedor();
            jogadorAtual = jogadorAtual === 'X' ? 'O' : 'X';
        }
    })
);
