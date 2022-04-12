//velocidade máxima até 70
//a cada 5km acima do limite você ganha 1 ponto
//usar Math.floor para arredondar numeros
//caso pontos maior que 12 -> 'carteira suspensa'

verificarVelocidade(130);

function verificarVelocidade(velocidade) {
  const velocidadeMaxima = 70;
  const kmPorPonto = 5;
  
  if (velocidade <= velocidadeMaxima)
    console.log("OK");
  else {
    const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
    if(pontos >= 12)
      console.log('carteira suspensa')
    else
      console.log('Pontos', pontos)
  }
}