const submitButton = document.getElementById("submitButton"); // criando um botao para receber o evento de add tarefa

submitButton.addEventListener("click", () => { // criei um evento de click que irá adicionar os dados na API passada
    const name = document.getElementById("name").value;  // criando a variavel e vinculando com o id do input  html
    const descricao = document.getElementById("descricao").value; // criando a variavel e vinculando com o id do input  html
    
    fetch("http://localhost:3001/list", { // metodo para passar o link a API
        method: "POST",  // O TIPO DE REQUISIÇÃO QUE IRÁ FAZER
        headers: {  // esse cabeçalho explica que os dados solicitados vao vim em json
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name, descricao: descricao }) // converter o obj em string json
    })
    .then(response => response.json()) // essa promise é quando a requisição for concluida, vai converter em json para manipular como obj
    .then(data => console.log(data))  // vai mostra no console os resultados concluido da promise OPCIONAL
    .catch(error => console.error("Error", error));  //caso a promise seja rejeitada ele mostra error no console
});

function showList() {

    fetch("http://localhost:3001/list")
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById("list"); // Obtém o corpo da tabela pelo ID
        list.innerHTML = ""; // Limpa a tabela anterior
        data.forEach((item) => {
            const listLine = document.createElement("tr");  // Cria uma nova linha na tabela

            listLine.innerHTML = `
                
                <td><input type="checkbox"  class="task-checkbox"></td>
                <td>${item.name}</td>
                <td>${item.descricao}</td>
                <td>
                    <button class="del" onclick="deletList('${item.id}')">Excluir</button>
                </td>
            `;

            list.appendChild(listLine); // Adiciona a nova linha ao corpo da tabela
        })
    })
    .catch(error => console.error("Error", error)) // Captura e trata erros no console
}


function deletList(id) {
    fetch(`http://localhost:3001/list/${id}`, {
        method: "DELETE"
    })
    .then(() => showList()) // Atualiza a lista após excluir uma tarefa
    .catch(error => console.error("Error", error)) // Captura e trata erros no console
}


// Carregar as tarefas ao iniciar a página
window.onload = showList;
