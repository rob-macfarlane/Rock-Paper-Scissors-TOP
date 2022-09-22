


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





// create a function to get the players selection

function playerSelection() {

    //input 
    let userInput = prompt("Rock Paper or scissors?", 'rock');
    userInput = userInput.toLowerCase();

    //return the player selection
    return userInput;
    
}

function game() {
    // for (let i = 0; i < 5; i++) {
    //     console.log(playRound(playerSelection(), getComputerChoice()));
    // }

    console.log(playRound(playerSelection(), getComputerChoice()));
}


function playRound(playerChoice, computerChoice) {
    //if statements for the 6 cases
    if (playerChoice == computerChoice) {
        return 'It\'s a tie!';          
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        return 'Rock beats scissors, You Win!'
    } else if (playerChoice == 'rock' && computerChoice == 'paper') {
        return 'Paper beats rock, You lose!'
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        return 'Paper beats rock, You win!'     
    } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
        return 'Scissors beat paper, You lose!'
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        return 'Scissors beat paper, You win!'
    } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
        return 'Rock beats scissors, You lose!'
    }
    
}


game();