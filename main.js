const buttons = document.querySelectorAll('button');
const info = document.querySelector('.info');
const count = document.querySelector('.count');
const container = document.querySelector('.container');
const body = document.querySelector('body');

let humanScore = 0;
let computerScore = 0;

info.textContent = 'Hello! lets play?'
buttons.forEach((button) => {
    button.addEventListener('click', () => { playRound(button.textContent, getComputerChoice()) });
});

function getComputerChoice() {
    let allChoice = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return allChoice[choice];
}

function playRound(humanChoice, computerChoice) {

    console.log(humanChoice + ' vs ' + computerChoice);
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore += 1;
        info.textContent = "You : Computer"
        count.textContent = `${humanScore} : ${computerScore}`
        gameScore();
    }
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        info.textContent = "You : Computer"
        count.textContent = `${humanScore}    : ${computerScore}`
        gameScore();
    }
    if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore += 1;
        info.textContent = "You : Computer"
        count.textContent = `${humanScore}    : ${computerScore}`
        gameScore();
    }
    if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore += 1;
        info.textContent = "You : Computer"
        count.textContent = `${humanScore}    : ${computerScore}`
        gameScore();
    }
    if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore += 1;
        info.textContent = "You : Computer"
        count.textContent = `${humanScore}    : ${computerScore}`
        gameScore();
    }
    if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        info.textContent = "You : Computer"
        count.textContent = `${humanScore}    : ${computerScore}`
        gameScore();
    }
}



function gameScore() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            info.textContent = "let's play?";
            count.textContent = 'win';
            humanScore = 0;
            computerScore = 0;
        } else {
            info.textContent = "let's play?";
            count.textContent = 'defeat'
            humanScore = 0;
            computerScore = 0;
        }
    }
}
