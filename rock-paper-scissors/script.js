// Main function will always be called
let playerScore = 0;
let computerScore = 0;
let roundsCompleted = 0;
let playerChoice = "";
let computerChoice = "";
const totalRounds = 5;

function main(){
    console.log("script executed");
    const choices = ["Rock", "Paper", "Scissors"];
    const buttonClassNames = ["rock-btn", "paper-btn", "scissor-tbn"]
    // Once user clicks start change the UI to display 3 buttons
    const gameStartButton = document.querySelector("button");
    gameStartButton.addEventListener("click", () => {
        console.log("button clicked")
        // Remove start button and add 3 game buttons
        const startContainer = document.querySelector(".starter-container");
        startContainer.remove();
        const gameContainer = document.querySelector(".game-btn-container");
        const gameButtons = [];
        for (let i = 0; i < 3; i++)
        {
            gameButtons.push(document.createElement("button"));
            gameButtons[i].className = buttonClassNames[i];
            gameButtons[i].textContent = choices[i];
            gameContainer.appendChild(gameButtons[i]);
        }
        console.log("buttons created");
        console.log(gameButtons[0]);
        playerSelection(gameButtons);
        console.log(playerChoice);
    });

    return;
}

function decideWinner(){
    if (playerScore > computerScore){
        alert("You Won by " + (playerScore - computerScore) + 
        " point(s)\nPlayer: " + playerScore + "\nComputer: " + computerScore);
    }
    else if (computerScore > playerScore)
    {
        alert("You Lost by " + (computerScore - playerScore) 
        + " point(s)\nComputer: " + computerScore + "\nPlayer: " + playerScore);
    }
    else
    {
        alert("It's a Tie! You both scored " + computerScore);
    }
}

function game(playerChoice, computerChoice){
    switch(true){
        case (playerChoice == "rock" && computerChoice == "scissors"):
        case (playerChoice == "scissors" && computerChoice == "paper"):
        case (playerChoice == "paper" && computerChoice == "rock"):
        case (playerChoice == "scissors" && computerChoice == "paper"):
            alert(`You Win! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
            alert("Score is\nPlayer: " + playerScore + "\nComputer: " 
            + computerScore);
            break;
        case (computerChoice == "rock" && playerChoice == "scissors"):
        case (computerChoice == "scissors" && playerChoice == "paper"):
        case (computerChoice == "paper" && playerChoice == "rock"):
        case (computerChoice == "scissors" && playerChoice == "paper"):
            alert(`You Lose! ${computerChoice} beats ${playerChoice}`);
            computerScore++;
            alert("Score is\nPlayer: " + playerScore + "\nComputer: " 
            + computerScore);
            break;
        case (playerChoice == computerChoice):
            alert(`Tie!`);
            break;  
    }
    roundsCompleted++;
}

// Function to get player selection

function playerSelection(gameButtonArray){
    gameButtonArray[0].addEventListener("click", () => {
        playerChoice = "rock";
    });
}

// Function to get computer choice

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3); // return a random number from 0 - 3
    return choices[randomChoice];
}

main();