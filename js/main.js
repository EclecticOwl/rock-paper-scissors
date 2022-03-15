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

let playerScore = 0; 
let computerScore = 0;
let totalgames = 0;

let playRound = (playerSelection, computerSelection) => {
    let winner;
    if (playerSelection == computerSelection) {
        winner = 'It is a tie!';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        winner = 'Player Wins!';
        playerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        winner = 'Computer Wins!';;
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        winner = 'Computer Wins!';
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        winner = 'Player Wins!';
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        winner = 'Player Wins!';
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        winner = 'Computer Wins!';
        computerScore++;
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

    let computer = computerPlay()

    if (totalgames >= 10) {
        if ( playerScore > computerScore) {
            console.log('Player Wins The Game!')
        }else {
            console.log('Computer Wins The Game!')
        }
    }else {
        console.log(playRound(player, computer))
        totalgames++
        console.log(`Current score is: \n
            Player: ${playerScore}
            Computer: ${computerScore}
            Games: ${totalgames}
            `)
    }


    

    // console.log(playRound(player, computer));
}



