let = produtos = [
    {
        name: "Computador", disponivel: true
    }, {
        name: "Champinha", disponivel: false
    }, {
        name: "Dvd luan santana", disponivel: true
    }, {
        name: "KitKat", disponivel: false
    }, {
        name: "Boneca", disponivel: true
    }
]

function verificarProdutoDisponivel(product) {
    return product.disponivel == true;
}

let productFilter = produtos.filter(verificarProdutoDisponivel);

console.log(productFilter)