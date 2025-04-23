// const img = document.getElementById('card');

// img.addEventListener('click', () => {
//     img.classList.toggle('expanded');
// });

const img = document.getElementById('card');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

// Abrir modal ao clicar na imagem
img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
});

// Fechar modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fechar modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
