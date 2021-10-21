let playerScore = 0
let computerScore = 0;
let computerSelection;


function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3); 

    if (randomNum == 0) return 'ROCK';
    else if (randomNum == 1) return 'PAPER';
    else return 'SCISSORS'
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "ROCK" && computerSelection === "ROCK" ||
     playerSelection === "PAPER" && computerSelection === "PAPER" ||
     playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        updateScoreText()
        updateMessage("Draw!") 
    } else if (playerSelection === "ROCK" && computerSelection === "PAPER" ||
        playerSelection === "PAPER" && computerSelection === "SCISSORS" ||
        playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            computerScore++;
            updateScoreText();
            updateMessage(`You lose! ${computerSelection} beats ${playerSelection}`)
    } else {
        playerScore++;
        updateScoreText();
        updateMessage(`You win! ${playerSelection} beats ${computerSelection}`);
    }
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => playGame("ROCK"))
paper.addEventListener("click", () => playGame("PAPER"))
scissors.addEventListener("click", () => playGame("SCISSORS"))

function playGame(playerSelection) {
    document.getElementById("message").innerHTML = '';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    if (playerScore == 5) {
        document.getElementById("message").innerHTML = `You won!`
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        document.getElementById("message").innerHTML = `You Lost!`
        playerScore = 0;
        computerScore = 0;
    }
}

function updateMessage(message) {
    let messageSlctr = document.getElementById("message");
    messageSlctr.innerHTML = message; 
}

function updateScoreText() {
    document.getElementById("player-score").innerHTML = parseInt(playerScore);
    document.getElementById("computer-score").innerHTML = parseInt(computerScore);
}
