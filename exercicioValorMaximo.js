//escreva uma função que usa 2 numeros e retorna o maior entre eles

// com if
const num1 = 5;
const num2 = 3;

if (num1 > num2) {
  console.log(num1);
}
else if (num2 > num1) {
  console.log(num2);
}
else {
  console.log('os numeros são iguais');
}

//com operador ternario
let a = 3;
let b = 4;
let c = a > b ? a : b

console.log(c)

//com funcao
function max1(numero1,numero2) {
  if(numero1 > numero2) {
    return numero1;
  }
  else {
    return numero2;
  } 
}

function max2(number1,number2) {
  return number1 > number2 ? number1 : number2
}

let resultado1 = max1(9,7);
let resultado2 = max2(8,6);

console.log(resultado1);
console.log(resultado2);
  