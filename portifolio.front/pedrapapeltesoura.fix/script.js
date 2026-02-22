const socket = new WebSocket('ws://seu_endereço_do_servidor_websocket'); // Substitua por sua URL

const player1Buttons = document.querySelectorAll('#player1 button');
const player2Buttons = document.querySelectorAll('#player2 button');
const resultDiv = document.getElementById('result');
const restartButton = document.getElementById('restart');

let player1Choice, player2Choice;
let player1Score = 0, player2Score = 0;

player1Buttons.forEach(button => {
    button.addEventListener('click', () => {
        player1Choice = button.id;
        socket.send(JSON.stringify({ player: 1, choice: player1Choice }));
        button.disabled = true;
        player2Buttons.forEach(button => button.disabled = false);
    });
});

player2Buttons.forEach(button => {
    button.addEventListener('click', () => {
        player2Choice = button.id;
        socket.send(JSON.stringify({ player: 2, choice: player2Choice }));
        button.disabled = true;
        player1Buttons.forEach(button => button.disabled = false);
    });
});

socket.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);
    if (data.player === 1) {
        player1Choice = data.choice;
    } else {
        player2Choice = data.choice;
    }

    if (player1Choice && player2Choice) {
        determineWinner();
        player1Choice = null;
        player2Choice = null;
    }
});

restartButton.addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    resultDiv.textContent = '';
    player1Buttons.forEach(button => button.disabled = false);
    player2Buttons.forEach(button => button.disabled = false);
});

function determineWinner() {
    const result = {
        rock: { scissors: 1, paper: -1 },
        paper: { rock: 1, scissors: -1 },
        scissors: { paper: 1, rock: -1 }
    };

    const winner = result[player1Choice][player2Choice];
    if (winner === 1) {
        player1Score++;
        resultDiv.textContent = 'Jogador 1 venceu!';
    } else if (winner === -1) {
        player2Score++;
        resultDiv.textContent = 'Jogador 2 venceu!';
    } else {
        resultDiv.textContent = 'Empate!';
    }

    socket.send(JSON.stringify({ player1Score, player2Score }));
}