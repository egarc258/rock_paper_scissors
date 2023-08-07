function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'lose';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'lose';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'win';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'lose';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'win';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i=0;i<5;i++){
        const playerSelection = prompt("Choose rock, paper, or scissors: ");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === 'win') {
            console.log('You win! ', playerSelection, " beats ", computerSelection);
            playerScore++;
        } else if (result === 'lose') {
            console.log('You lose! ', computerSelection, " beats ", playerSelection);
            computerScore++;
        } else if (result === 'tie'){
            console.log('Its a tie!');
        }
        console.log(playerScore, 'vs', computerScore);
    }
    if (playerScore > computerScore){
        console.log("You are the winner!");
    } else if (playerScore < computerScore){
        console.log("Sorry the computer won!");
    } else if (playerScore === computerScore){
        console.log("It's a draw!")
    } 
}

console.log(game());

