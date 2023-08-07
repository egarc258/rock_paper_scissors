function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];
    return computerChoice;
}

console.log(getComputerChoice());

