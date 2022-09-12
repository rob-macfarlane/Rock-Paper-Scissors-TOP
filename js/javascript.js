


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

    return computerChoice;
    }
}

getComputerChoice();



// create a function to get the players selection

function getPlayerChoice() {

    //input 
    let userInput = prompt("Rock Paper or scissors?", 'Rock');
    userInput = userInput.toLowerCase();

    //return the player selection
    return userInput;
    
}

getPlayerChoice();

// create a function that plays a round of rock paper scissors with computer and player selections as inputs

    //if statements for the 6 cases


    // return the string for the loser/ winner case