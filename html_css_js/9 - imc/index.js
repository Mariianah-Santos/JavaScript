function imc() {

    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const imcUser = peso / (altura * altura);

    const imcConverter = parseFloat(imcUser.toFixed(2));

    const resultDiv = document.getElementById('imcResult');
    resultDiv.innerHTML = '';

    if (imcConverter < 18.5) {
        resultDiv.innerHTML = `
            <p>${imcConverter} ABAIXO O PESO </p>
        `;
    } else if (imcConverter < 24.9) {
        resultDiv.innerHTML = `
            <p>${imcConverter} PESO NORMAL </p>
        `;
    } else if (imcConverter < 29.9) {
        resultDiv.innerHTML = `
        <p>${imcConverter} SOBREPESO </p>
    `;
    } else if (imcConverter < 34.9) {
        resultDiv.innerHTML = `
        <p>${imcConverter} OBESIDADE GRAU 1 </p>
    `;
    } else if (imcConverter < 39.9) {
        resultDiv.innerHTML = `
        <p>${imcConverter} OBESIDADE GRAU 2 </p>
    `;
    } else {
        resultDiv.innerHTML = `
        <p>${imcConverter} OBESIDADE GRAU 3 (MÓRBIDA) </p>
    `;
    }
}