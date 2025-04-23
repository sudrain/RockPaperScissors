const buttons = document.querySelectorAll('button');
const info = document.querySelector('.info');
const count = document.querySelector('.count');
const container = document.querySelector('.container');
const body = document.querySelector('body');

container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.width = '450px';
container.style.padding = '20px';
container.style.backgroundColor = 'pink';
container.style.borderRadius = '8px';
container.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
container.style.position = 'absolute';
container.style.top = '50%';
container.style.left = '50%';
container.style.transform = 'translate(-50%, -50%)';
info.style.cssText = "text-align: center; font-size: 32px;";
count.style.cssText = "text-align: center; font-size: 32px;";


let humanScore = 0;
let computerScore = 0;

info.textContent = 'Hello! lets play?'
buttons.forEach((button) => {
    button.addEventListener('click', () => { playRound(button.textContent, getComputerChoice()) });
    button.style.margin = '0 10px';
    button.style.padding = '10px 20px';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.style.color = 'white';
    button.style.backgroundColor = 'grey';
    button.style.fontSize = '16px'
});

function getComputerChoice() {
    let allChoice = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return allChoice[choice];
}

function playRound(humanChoice, computerChoice) {
    info.textContent = humanChoice + ' vs ' + computerChoice;
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore += 1;
        count.textContent = `${humanScore} : ${computerScore}`
        gameScore();
    }
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        count.textContent = `${humanScore}    : ${computerScore}`
        gameScore();
    }
    if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore += 1;
        count.textContent = `${humanScore}    : ${computerScore}`
        gameScore();
    }
    if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore += 1;
        count.textContent = `${humanScore}    : ${computerScore}`
        gameScore();
    }
    if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore += 1;
        count.textContent = `${humanScore}    : ${computerScore}`
        gameScore();
    }
    if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        count.textContent = `${humanScore}    : ${computerScore}`
        gameScore();
    }
}

function gameScore() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            info.textContent = 'win';
            count.textContent = "let's play?";
            humanScore = 0;
            computerScore = 0;
        } else {
            info.textContent = 'defeat';
            count.textContent = "let's play?";
            humanScore = 0;
            computerScore = 0;
        }
    }
}
