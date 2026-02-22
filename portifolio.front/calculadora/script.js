const display = document.getElementById('display');
let numeroAtual = '';
let numeroAnterior = '';
let operacao = null;

const atualizarDisplay = () => {
  display.innerText = numeroAtual;
}

const lidarComClique = (evento) => {
  const valor = evento.target.innerText;

  if (!isNaN(valor)) { 
    numeroAtual += valor;
    atualizarDisplay();
  } else if (valor === 'C') { 
    numeroAtual = '';
    numeroAnterior = '';
    operacao = null;
    atualizarDisplay();
  } else if (valor === '=') { 
    if (operacao === null || numeroAnterior === '') return;
    calcular();
    atualizarDisplay();
  } else { 
    operacao = valor;
    numeroAnterior = numeroAtual;
    numeroAtual = '';
  }
}

const calcular = () => {
  const numAnterior = parseFloat(numeroAnterior);
  const numAtual = parseFloat(numeroAtual);
  let resultado = '';

  switch (operacao) {
    case '+':
      resultado = numAnterior + numAtual;
      break;
    case '-':
      resultado = numAnterior - numAtual;
      break;
    case '*':
      resultado = numAnterior * numAtual;
      break;
    case '/':
      if (numAtual === 0) {
        resultado = "Erro: Divisão por zero";
      } else {
        resultado = numAnterior / numAtual;
      }
      break;
    default:
      return;
  }

  numeroAtual = resultado.toString();
  operacao = null;
  numeroAnterior = '';
}

const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao => botao.addEventListener('click', lidarComClique));