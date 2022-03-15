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


rock.addEventListener('click', () => {
    game("rock");
});
paper.addEventListener('click', () => {
    game("paper");
});
scissors.addEventListener('click', () => {
    game("scissors");
});


function game(player) {

    let computer = computerPlay();
    console.log(playRound(player, computer));
}



