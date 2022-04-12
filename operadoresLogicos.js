//operadores lógicos

let maiorIdade = false;
let carteiraTrabalho = false;
let podeAplicar = maiorIdade || carteiraTrabalho;

let candidatoRecusado = !podeAplicar;
console.log(podeAplicar);
console.log(candidatoRecusado)

let cor = 0;
let tom = 'claro';
let mostra = cor || tom;
console.log(mostra)

function soma(x, y) {
  return x + y;
}
function multiplicação(x, y) {
  return x * y;
}
let valor = 'soma';
let teste = valor ? 'soma' : soma(1, 2);

console.log(teste);