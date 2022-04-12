//divisivel por 3 -> fizz
//divisivel por 5 -> buzz
//divisivel por 3 e por 5 -> fizzBuzz
// não divisivel por 3 ou por 5 -> entrada
//não é um numero -> não é um numero

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
  
  if (typeof entrada != "number") {
    return 'não é um numero';
  }
  else if (entrada % 3 === 0 && entrada % 5 != 0) {
    return 'fizz';
  }
  else if (entrada % 5 === 0 && entrada % 3 != 0) {
    return 'buzz';
  }
  else if (entrada % 3 === 0 && entrada % 5 === 0) {
    return "fizzBuzz"
  }
  else {
    return entrada;
  }
}
