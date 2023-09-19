function getComputerChoice() {
    var rndNumber = Math.floor(Math.random() * 3) + 1;
    if (rndNumber === 1) {
        return "ROCK";
    } else if (rndNumber === 2) {
        return "PAPER";
    } else if (rndNumber === 3) {
        return "SCISSORS";
    }
}

function playRound(playerSelection, aiSelection) {
    if (playerSelection === aiSelection) {
        return "Draw";
    } else if ((playerSelection === "ROCK" && aiSelection === "SCISSORS") || (playerSelection === "SCISSORS" && aiSelection === "PAPER") || (playerSelection === "PAPER" && aiSelection === "ROCK")){
        return "Player Wins!";
    } else {
        return "Computer Wins!";
    }
}

function game() {
    for (var round = 0; round < 5; round++) {
        var playerChoice = prompt("Rock, Paper, or Scissors?");
        console.log(playRound(playerChoice.toUpperCase(), getComputerChoice()));
    }
}

game();
