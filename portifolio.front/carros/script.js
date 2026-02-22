const whiteCar = document.getElementById('white');
const redCar = document.getElementById('red');
const result = document.getElementById('result');
const body = document.body;

let selectedCar = 'white'; // Inicialmente, o carro branco está selecionado
let whiteCarSpeed = 0;
let redCarSpeed = 0;

// Inicializa a posição dos carros
whiteCar.style.position = 'absolute';
whiteCar.style.left = '205px'; // Posição inicial do carro branco
whiteCar.style.top = '60px'; // Posição vertical inicial do carro branco
redCar.style.position = 'absolute';
redCar.style.left = '295px'; // Posição inicial do carro vermelho
redCar.style.top = '60px'; // Posição vertical inicial do carro vermelho

// Event listeners para cliques nos círculos
document.getElementById('branco').addEventListener('click', () => {
  selectedCar = 'white';
  body.style.backgroundColor = 'white';
  body.style.color = 'black';
  result.textContent = 'Branco';
});

document.getElementById('vermelho').addEventListener('click', () => {
  selectedCar = 'red';
  body.style.backgroundColor = 'red';
  body.style.color = 'white';
  result.textContent = 'Vermelho';
});

// Event listener para o botão de resetar
document.getElementById('resetar').addEventListener('click', () => {
  whiteCar.style.width = '50px';
  whiteCar.style.height = '50px';
  redCar.style.width = '50px';
  redCar.style.height = '50px';
  whiteCarSpeed = 0;
  redCarSpeed = 0;
  body.style.backgroundColor = 'black';
  body.style.color = 'white';
  whiteCar.style.top = '60px'; // Reseta a posição do carro branco
  redCar.style.top = '60px'; // Reseta a posição do carro vermelho
});

// Acelera o carro selecionado
document.getElementById('acelerar').addEventListener('click', () => {
  if (selectedCar === 'white') {
    whiteCarSpeed += 1;
  } else {
    redCarSpeed += 1;
  }
});

// Desacelera o carro selecionado
document.getElementById('desacelerar').addEventListener('click', () => {
  if (selectedCar === 'white' && whiteCarSpeed > 0) {
    whiteCarSpeed -= 1;
  } else if (selectedCar === 'red' && redCarSpeed > 0) {
    redCarSpeed -= 1;
  }
});

// Controle de teclado para acelerar e desacelerar
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    if (selectedCar === 'white') {
      whiteCarSpeed += 1; // Aumenta a velocidade do carro branco
    } else {
      redCarSpeed += 1; // Aumenta a velocidade do carro vermelho
    }
  } else if (event.key === 'ArrowDown') {
    if (selectedCar === 'white' && whiteCarSpeed > 0) {
      whiteCarSpeed -= 1; // Diminui a velocidade do carro branco
    } else if (selectedCar === 'red' && redCarSpeed > 0) {
      redCarSpeed -= 1; // Diminui a velocidade do carro vermelho
    }
  }
});

// Movimento dos carros
setInterval(() => {
  if (selectedCar === 'white') {
    let topPosition = parseInt(whiteCar.style.top);
    whiteCar.style.top = `${topPosition - whiteCarSpeed}px`; // Move o carro branco para cima
  } else {
    let topPosition = parseInt(redCar.style.top);
    redCar.style.top = `${topPosition - redCarSpeed}px`; // Move o carro vermelho para cima
  }
}, 100); // Atualiza a posição a cada 100ms
