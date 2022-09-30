
let yourScore = 0;
let computerScore = 0;


function getComputerChoice() {

    let choiceInteger = Math.floor(Math.random() * 3);
    let computerChoice;
    switch(choiceInteger) {
        case 0: 
            computerChoice = 'rock';
            break;
        case 1: 
            computerChoice = 'paper';
            break;
        case 2: 
            computerChoice = 'scissors';
            break;

    
    }
    return computerChoice;
}



function game(playerSelection) {

    return playRound(playerSelection, getComputerChoice());

}


function playRound(playerChoice, computerChoice) {
    //if statements for the 6 cases
    if (playerChoice == computerChoice) {
        return 'It\'s a tie!';          
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        yourScore += 1;
        return 'Rock beats scissors, You Win!'
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        computerScore += 1;
        return 'Paper beats rock, You lose!'
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        yourScore += 1;
        return 'Paper beats rock, You win!'     
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        computerScore += 1;
        return 'Scissors beat paper, You lose!'
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        yourScore += 1;
        return 'Scissors beat paper, You win!'
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        computerScore += 1;
        return 'Rock beats scissors, You lose!'
    }
    
}


const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', (e) => {
    const resultContainer = document.querySelector('#results');
    const rpsResult = document.createElement('div');
    const score = document.querySelector('#score');
    rpsResult.classList.add('singleResult');
    
    rpsResult.textContent = game('rock');
    score.textContent = 'Your score is:' + yourScore + ' The computer score is:' + computerScore;
    resultContainer.appendChild(rpsResult);
    console.log(e);
});


const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', (e) => {
    const resultContainer = document.querySelector('#results');
    const rpsResult = document.createElement('div');
    const score = document.querySelector('#score');
    rpsResult.classList.add('singleResult');
    
    rpsResult.textContent = game('paper');
    score.textContent = 'Your score is:' + yourScore + ' The computer score is:' + computerScore;
    resultContainer.appendChild(rpsResult);
    console.log(e);
})

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', (e) => {
    const resultContainer = document.querySelector('#results');
    const rpsResult = document.createElement('div');
    const score = document.querySelector('#score');
    rpsResult.classList.add('singleResult');
    
    rpsResult.textContent = game('scissors');
    score.textContent = 'Your score is:' + yourScore + ' The computer score is:' + computerScore;
    resultContainer.appendChild(rpsResult);
    console.log(e);
})