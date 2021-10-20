let playerScore = 0
let computerScore = 0;



function computerPlay() {
    let randomNum = Math.floor(Math.random() * (3 - 0) + 0); 

    if (randomNum == 0) return 'ROCK';
    else if (randomNum == 1) return 'PAPER';
    else return 'SCISSORS'
}

function playerPlay() {
    let playerChoice = prompt("ROCK, PAPER, SCISSORS?").toUpperCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    let result = "";

    if (playerSelection === "ROCK" && computerSelection === "ROCK" ||
     playerSelection === "PAPER" && computerSelection === "PAPER" ||
     playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        return "Draw!" 
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            computerScore++;
           return result = `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        playerScore++;
        return result = `You win! ${playerSelection} beats ${computerSelection}`
    }


}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
      
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) console.log(`You won!
    You: ${playerScore} Computer: ${computerScore}`);
    
    else if (playerScore < computerScore) console.log(`You lost!
    You: ${playerScore} Computer: ${computerScore}`)
    
    else console.log(`It's a draw!`)
}
game();
