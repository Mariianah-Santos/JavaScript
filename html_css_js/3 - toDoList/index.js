const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const descricao = document.getElementById('descricao').value; 
    
    if (title === "" || descricao === "") {
        alert ("dados nao preenchidos")
        return false;
    } 

    fetch("http://localhost:3001/list", {
        method: 'post',
        headers: {
            "Contente-Type" : "application/json"
        },

        body: JSON.stringify({ title: title, descricao: descricao})
    })

    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    return true;
})

function showList() {
    fetch("http://localhost:3001/list")
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('list');
        list.innerHTML = '';
        data.forEach((itemList) => {
            const listLine = document.createElement('tr');
            listLine.innerHTML = `
                <td><input type="checkbox" ></td>
                <td>${itemList.title}</td>
                <td>${itemList.descricao}</td>
                <td>
                    <button class="del" onclick="deletList('${itemList.id}')">X</button>
                </td>
            `;
            list.appendChild(listLine);
        })
    })
    .catch(error => console.error("Error", error))
    return true;
}

function deletList(id) {
    fetch(`http://localhost:3001/list/${id}`, {
        method: "delete"
    })
    .then(() => showList())
    .catch(error => console.error("Error", error))
}
window.onload = showList;