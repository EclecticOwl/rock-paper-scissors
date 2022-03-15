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
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        winner = 'Player Wins!'
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        winner = 'Computer Wins!'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        winner = 'Computer Wins!'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        winner = 'Player Wins!'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        winner = 'Player Wins!'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        winner = 'Computer Wins!'
    }
    return winner;
};

let playerSelection;
const computerSelection = computerPlay();

let buttons = document.querySelectorAll('button')

buttons.forEach(item => {
    item.addEventListener('click', event => {
        // console.log(event.target.innerText);
        if (event.target.innerText == 'Rock') {
            playerSelection = 'rock';
        }else if (event.target.innerText == 'Paper') {
            playerSelection = 'paper';
        }else if (event.target.innerText == 'Scissors') {
            playerSelection = 'scissors';
        }
    })
})






// console.log('Player played ' + playerSelection);
// console.log('Computer played ' + computerSelection);
// console.log(playRound(playerSelection, computerSelection));