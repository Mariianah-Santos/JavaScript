let editingId = null; // Variável para armazenar o ID do contato em edição

document.getElementById('submitButton').addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const tel = document.getElementById("tel").value;
    const msgErrorName = document.getElementById("msgErrorName");
    const msgErrorTel = document.getElementById("msgErrorTel");

    let error = false;

    
    if (name.trim() === '') {
        msgErrorName.innerHTML = `<p>O campo nome precisa ser preenchido</p>`;
        error = true;
    } else {
        msgErrorName.innerHTML = '';
    }

    if (tel.trim() === '') {
        msgErrorTel.innerHTML = `<p>O campo telefone precisa ser preenchido</p>`;
        error = true;
    } else {
        msgErrorTel.innerHTML = '';
    }

    if (error) {
        setTimeout(() => {
            msgErrorName.innerHTML = '';
            msgErrorTel.innerHTML = '';
        }, 2000);
        return;
    }

    if (editingId) {
        // Atualizar contato existente
        fetch(`http://localhost:3001/contact/${editingId}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, tel })
        })
        .then(() => {
            editingId = null;
            document.getElementById('submitButton').innerText = 'Adicionar';
            document.getElementById("name").value = '';
            document.getElementById("tel").value = '';
            showList();
        })
        .catch(error => console.error("Error", error));
    } else {
        // Criar novo contato
        fetch("http://localhost:3001/contact", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, tel })
        })
        .then(() => {
            document.getElementById("name").value = '';
            document.getElementById("tel").value = '';
            showList();
        })
        .catch(error => console.error("Error", error));
    }
});

function showList() {
    fetch('http://localhost:3001/contact')
    .then(response => response.json())
    .then(data => {
        const listContact = document.getElementById('listContact');
        listContact.innerHTML = '';
        data.forEach((list) => {
            const listItem = document.createElement('tr');
            listItem.innerHTML = `
                <td>${list.name}</td>
                <td>${list.tel}</td>
                <td>
                     <button class="del" onclick="deletList('${list.id}')">X</button>
                     <button class="edit" onclick="editList('${list.id}')">✏️</button>
                </td>
            `;
            listContact.appendChild(listItem);
        });
    })
    .catch(error => console.error("Error", error));
}

function deletList(id) {
    fetch(`http://localhost:3001/contact/${id}`, { method: 'DELETE' })
    .then(() => showList())
    .catch(error => console.error("Error", error));
}

function editList(id) {
    fetch(`http://localhost:3001/contact/${id}`)
        .then(response => response.json())
        .then(contact => {
            document.getElementById("name").value = contact.name;
            document.getElementById("tel").value = contact.tel;
            document.getElementById("submitButton").innerText = 'Atualizar';
            editingId = id;
        })
        .catch(error => console.error("Error", error));
}

window.onload = showList;