const computerPlay = (choice) => {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        choice = 'rock';
    } else if (randNum == 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    };
    return choice;
};


let playRound = (playerSelection, computerSelection) => {
    let winner;
    if (playerSelection == computerSelection) {
        winner = 'It is a tie!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        winner = 'Computer Wins!';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        winner = 'Computer wins!';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        winner = 'Player Wins!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        winner = 'Player Wins!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        winner = 'Player Wins!'
    }
    return winner;
};

const playerSelection = 'rock';
const computerSelection = computerPlay();

console.log('Player played ' + playerSelection);
console.log('Computer played ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));