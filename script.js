let computerSelection;
let playerSelection;
let playerWinCount = 0;
let computerWinCount = 0;

let rollArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    //roll an int from 3 numbers (0, 1, 2)
    return rollArray[Math.floor(Math.random() * rollArray.length)];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice().toLowerCase();
    playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    console.log(playerSelection);
    console.log(computerSelection);

    if (computerSelection == playerSelection) {
        console.log("Draw!");
        return result = "draw";
    } else if (
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "rock") 
    ) {
        console.log("Win!");
        return result = "win";
    } else {
        console.log("Lose!");
        return result = "lose";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        if (result == "win") {
            playerWinCount++;
            console.log(`Opponent: ${computerWinCount}`);
            console.log(`You: ${playerWinCount}`);
        } else if (result == "lose") {
            computerWinCount++;
            console.log(`Opponent: ${computerWinCount}`);
            console.log(`You: ${playerWinCount}`);
        } else {
            console.log(`Opponent: ${computerWinCount}`);
            console.log(`You: ${playerWinCount}`);
        }
    }

    if (playerWinCount > computerWinCount) {
        console.log("You win!");
    } else if (playerWinCount == computerWinCount) {
        console.log("Draw!");
    } else {
        console.log("You lost :(");
    }
}

RemotePlayback
game();