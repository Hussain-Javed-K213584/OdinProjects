// Main function will always be called
let playerScore = 0;
let computerScore = 0;
let roundsCompleted = 0;
const totalRounds = 5;

function main(){
    console.log("script executed");
    let playerChoice = playerSelection();
    let computerChoice = getComputerChoice();
    game(playerChoice, computerChoice);
    return;
}


function game(playerChoice, computerChoice){
    switch(true){
        case (playerChoice == "rock" && computerChoice == "scissors"):
        case (playerChoice == "scissors" && computerChoice == "paper"):
        case (playerChoice == "paper" && computerChoice == "rock"):
        case (playerChoice == "scissors" && computerChoice == "paper"):
            alert(`You Win! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
            break;
        case (computerChoice == "rock" && playerChoice == "scissors"):
        case (computerChoice == "scissors" && playerChoice == "paper"):
        case (computerChoice == "paper" && playerChoice == "rock"):
        case (computerChoice == "scissors" && playerChoice == "paper"):
            alert(`You Lose! ${computerChoice} beats ${playerChoice}`);
            computerScore++;
            break;
        case (playerChoice == computerChoice):
            alert(`Tie!`);
            break;  
    }
    roundsCompleted++;
}

//Function to get player selection

function playerSelection(){
    let playerChoice;
    while(true)
    {
        playerChoice = prompt("Rock, paper, or scissors?");
        playerChoice = playerChoice.toLowerCase();
        if (playerChoice != "rock" || playerChoice != "paper" 
            || playerChoice != "scissors")
        {
            alert("Invalid choice!");
        }
        else{
            return playerChoice;
        }
    }
}

// Function to get computer choice

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3); // return a random number from 0 - 3
    return choices[randomChoice];
}

main();