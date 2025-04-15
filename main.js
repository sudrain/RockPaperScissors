function getComputerChoice () {
    let allChoice = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return allChoice[choice];
}

function getHumanChoice () {
    result = window.prompt('get your choice(rock, paper, scissors)', 'scissors');
    return result.toLowerCase();
}

function playGame () {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
        console.log(humanChoice + ' vs ' + computerChoice);
        if (humanChoice == 'rock' && computerChoice == 'scissors') {
            humanScore += 1;
        }
        if (humanChoice == 'rock' && computerChoice == 'paper') {
            computerScore += 1;
        }
        if (humanChoice == 'paper' && computerChoice == 'rock') {
            humanScore += 1;
        }
        if (humanChoice == 'paper' && computerChoice == 'scissors') {
            computerScore += 1;
        }
        if (humanChoice == 'scissors' && computerChoice == 'paper') {
            humanScore += 1;
        }
        if (humanChoice == 'scissors' && computerChoice == 'rock') {
            computerScore += 1;
        }
    }
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(humanScore + ':' + computerScore);
    }
    if (humanScore > computerScore) {
        console.log('you won ' + humanScore + ':' + computerScore);
    } else if (computerScore > humanScore) {
        console.log('you lose ' + humanScore + ':' + computerScore);
    } else {
        console.log(humanScore + ':' + computerScore);
    }
}