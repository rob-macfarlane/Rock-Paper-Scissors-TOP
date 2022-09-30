
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

function printResults(userChoice) {
    const resultContainer = document.querySelector('#results');
    const rpsResult = document.createElement('div');

    rpsResult.classList.add('singleResult');
    rpsResult.textContent = game(userChoice);
    resultContainer.appendChild(rpsResult);
    
}

function updateScore() {
    const score = document.querySelector('#score');
    const yourScoreDiv = document.querySelector('#yourPoints');
    const computerScoreDiv = document.querySelector('#computerPoints');

    yourScoreDiv.textContent = 'Your score is:  ' + yourScore.toString();
    computerScoreDiv.textContent = 'The computer\'s score is:   ' + computerScore.toString(); 

}

function removeResults (){
    const results = document.getElementsByClassName('singleResult');
    while(results.length > 0){
        results[0].parentNode.removeChild(results[0]);
    }
}

function evaluateScore() {
    if (yourScore == 5) {
        alert('You win\nYou scored ' + yourScore + ' points\nThe computer scored ' + computerScore + ' points' );
        yourScore = 0;
        computerScore = 0;
        updateScore();
        removeResults();
    } else if (computerScore == 5) {
        alert('You lose\nThe computer scored ' + computerScore + ' points\nYou scored ' + yourScore + ' points' );
        yourScore = 0;
        computerScore = 0;
        updateScore();
        removeResults();


    }
}


const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', (e) => {
    printResults('rock');
    updateScore();
    evaluateScore();
    console.log(e);
});


const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', (e) => {
    printResults('paper');
    updateScore();
    evaluateScore();
    console.log(e);
})

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', (e) => {
    printResults('scissors');
    updateScore();
    evaluateScore();
    console.log(e);
})