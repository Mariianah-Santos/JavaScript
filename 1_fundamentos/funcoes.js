// function digaOi() {
//     console.log ("Ola mundo")
// }

// digaOi();

// function soma(a, b) {
//     const soma = a + b;
//     console.log(soma);
// }

// soma(10, 90);

// function multi(a, b) {
//     const multiplicacao = a * b;
//     return multiplicacao
// }

// const r = multi(10, 10);
// console.log(r);


// const saudacao = function (nome) {
//     console.log("ola " + nome);
// }

// saudacao("Mariana");

// function operacao (a, b, callback) {
//     console.log("Realizando operação...")
//     return callback(a, b);
// }

// let resultadoOperacao = operacao(10, 8, soma);
// console.log(resultadoOperacao)

// let resultadoOperacao2 = operacao(5, 5, function(x, y) {
//     return x - y;
// })

// console.log(resultadoOperacao2)

// const dividir = (a, b) => {
//     return a / b;
// }

// console.log(dividir(10, 5));

const dividir = (a, b) => a * b;
console.log(dividir(10, 10))

const msg = () => console.log("testando");
msg();