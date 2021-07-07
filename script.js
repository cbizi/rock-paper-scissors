function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection === "rock" && computerSelection === "Scissors") ||
        (playerSelection === "paper" && computerSelection === "Rock") ||
        (playerSelection === "scissors" && computerSelection === "Paper")) {
        playerWins++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    if ((playerSelection === "rock" && computerSelection === "Paper") ||
        (playerSelection === "paper" && computerSelection === "Scissors") ||
        (playerSelection === "scissors" && computerSelection === "Rock")) {
        computerWins++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return "It's a tie! You both chose " + computerSelection;
    }
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 33) {
        return "Rock";
    } else if (randomNumber < 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
    
}

let playerWins = 0;
let computerWins = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock-Paper-Scissors. Make your choice:");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerWins > computerWins) {
       return "Congrats you won! You won " + playerWins + " times.";
    }
    if (computerWins > playerWins) {
       return "I'm sorry, you lost this game. The computer won " + computerWins + " times.";
    } else {
       return "It's a tie! You both won " + playerWins + " times.";
    }   
}
console.log(game());