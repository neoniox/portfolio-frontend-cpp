const cardsData = [
    { id: 1, image: 'pc1.jpg' },
    { id: 2, image: 'wifi2.jpg' },
    { id: 3, image: 'mouse1.jpg' },
    { id: 1, image: 'pc1.jpg' },
    { id: 2, image: 'wifi2.jpg' },
    { id: 3, image: 'mouse1.jpg' },
];

let flippedCards = [];
let matchedCards = [];
let attempts = 0;

// Carregar as cartas no HTML
const cardsContainer = document.getElementById('cards-container');
const attemptsCount = document.getElementById('attempts-count');
const congratulationsMessage = document.getElementById('congratulations-message');

// Função para embaralhar as cartas
function shuffleCards() {
    for (let i = cardsData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsData[i], cardsData[j]] = [cardsData[j], cardsData[i]];
    }
}

// Função para renderizar as cartas
function renderCards() {
    cardsContainer.innerHTML = '';
    cardsData.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-id', card.id);
        cardElement.setAttribute('data-index', index);

        const imgElement = document.createElement('img');
        imgElement.src = card.image;
        cardElement.appendChild(imgElement);

        cardElement.addEventListener('click', () => flipCard(cardElement));

        cardsContainer.appendChild(cardElement);
    });
}

// Função para virar a carta
function flipCard(cardElement) {
    if (flippedCards.length < 2 && !cardElement.classList.contains('flipped') && !matchedCards.includes(cardElement)) {
        cardElement.classList.add('flipped');
        flippedCards.push(cardElement);

        if (flippedCards.length === 2) {
            attempts++;
            attemptsCount.textContent = attempts;
            checkMatch();
        }
    }
}

// Função para verificar se as cartas são iguais
function checkMatch() {
    const [firstCard, secondCard] = flippedCards;
    const firstCardId = firstCard.getAttribute('data-id');
    const secondCardId = secondCard.getAttribute('data-id');

    if (firstCardId === secondCardId) {
        matchedCards.push(firstCard, secondCard);
        flippedCards = [];

        if (matchedCards.length === cardsData.length) {
            setTimeout(() => {
                congratulationsMessage.textContent = 'PARABÉNS! Você encontrou todos os pares!';
            }, 500);
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            flippedCards = [];
        }, 1000);
    }
}

// Função para reiniciar o jogo
function restartGame() {
    flippedCards = [];
    matchedCards = [];
    attempts = 0;
    attemptsCount.textContent = attempts;
    congratulationsMessage.textContent = '';
    shuffleCards();
    renderCards();
}

// Evento para reiniciar o jogo
document.getElementById('restart-btn').addEventListener('click', restartGame);

// Inicializar o jogo
shuffleCards();
renderCards();
