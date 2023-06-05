let computerSelection;
let playerSelection;
let playerWinCount = 0;
let computerWinCount = 0;

let rollArray = ["rock", "paper", "scissors"];

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const h2 = document.querySelector('h2');
const compScore = document.getElementById('computerScore');
const playerScore = document.getElementById('playerScore');
const computerChoice = document.getElementById('computerChoice');
const playerChoice = document.getElementById('playerChoice');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        playerSelection = e.target.id;

        playRound();
        return playerSelection;
    })
})

function getComputerChoice() {
    computerSelection = rollArray[Math.floor(Math.random() * rollArray.length)];
    return computerSelection;
}

function checkWinner() {
    if (computerSelection == playerSelection) {
        h2.innerHTML = 'Result: Draw!';
    } else if (
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock") 
    ) {
        h2.innerHTML = 'Result: You win!';
        playerWinCount++;
    } else {
        h2.innerHTML = 'Result: You lose!';
        computerWinCount++;
    }
}

function playRound() {
    getComputerChoice();
    checkWinner();
    updateScore();
    computerChoice.innerHTML = `Computer: ${computerSelection}`;
    playerChoice.innerHTML = `Player: ${playerSelection}`;
}

function updateScore() {
    if (playerWinCount >= 5) {
        playerWinCount = 0;
        computerWinCount = 0;
        compScore.innerHTML = `Computer: ${computerWinCount}`;
        playerScore.innerHTML = `Player: ${playerWinCount}`;
    } else if (computerWinCount >= 5) {
        playerWinCount = 0;
        computerWinCount = 0;
        compScore.innerHTML = `Computer: ${computerWinCount}`;
        playerScore.innerHTML = `Player: ${playerWinCount}`;
    } else {
        compScore.innerHTML = `Computer: ${computerWinCount}`;
        playerScore.innerHTML = `Player: ${playerWinCount}`;
    }
}