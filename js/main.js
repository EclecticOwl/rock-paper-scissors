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

let p_score_div = document.getElementById('player-score')
let p_score = document.createElement('p')
p_score.textContent = 0

let c_score_div = document.getElementById('computer-score')
let c_score = document.createElement('p')
c_score.textContent = 0

let tie_score_div = document.getElementById('tie-score')
let tie_score = document.createElement('p')
tie_score.textContent = 0

let total_score_div = document.getElementById('total-score')
let total_score = document.createElement('p')
total_score.textContent = 0



let playRound = (playerSelection, computerSelection) => {
    let winner;
    if (playerSelection == computerSelection) {
        winner = 'It is a tie!';
        tie_score.textContent++;
        total_score.textContent++
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        winner = 'Player Wins!';
        p_score.textContent++;
        total_score.textContent++;
        playerScore++;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        winner = 'Computer Wins!';;
        c_score.textContent++;
        total_score.textContent++;
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        winner = 'Computer Wins!';
        c_score.textContent++;
        total_score.textContent++;
        computerScore++;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        winner = 'Player Wins!';
        p_score.textContent++;
        total_score.textContent++;
        playerScore++;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        winner = 'Player Wins!';
        p_score.textContent++;
        total_score.textContent++;
        playerScore++
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        winner = 'Computer Wins!';
        c_score.textContent++;
        total_score.textContent++;
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


let game_result = document.createElement('p')

function game(player) {
    let computer = computerPlay()
    if (totalgames >= 10) {
        if ( playerScore > computerScore) {
            game_result.textContent = "Player wins the game!";
            total_score_div.append(game_result)
            
        }else {
            game_result.textContent = "Computer wins the game!"
            total_score_div.append(game_result)
            
        }
    }else {
        console.log(playRound(player, computer))
        totalgames++
    }
}


p_score_div.append(p_score)
c_score_div.append(c_score)
tie_score_div.append(tie_score)
total_score_div.append(total_score)