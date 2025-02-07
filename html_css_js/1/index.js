function submitButton() { // funcao criada para obter as informações do form html

    // criando variaveis e recebendo pelo id os inputs
    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value; 
    const msg = document.getElementById('msg').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || msg === '') { // condição para saber se todos os campos foram preenchidos se algum input for falso ele a erro
        alert("Todos os campos devem ser preenchidos");
        return false;
    }

    if (!emailRegex.test(email)) { // se o input email nao respeita essas regras retorna falso
        alert("Email inválio")
        return false;
    }

    alert("Formulario enviado com sucesso"); // Caso tudo for preenchido certo, retorna verdadeiro 
    return true;

}