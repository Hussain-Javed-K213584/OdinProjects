// Main function will always be called
let playerScore = 0;
let computerScore = 0;
let roundsCompleted = 0;
let playerChoice = "";
let computerChoice = "";
const TOTAL_ROUNDS = 5;

const choices = ["Rock", "Paper", "Scissors"];
const buttonClassNames = ["rock-btn", "paper-btn", "scissor-tbn"]
const buttonContainer = document.querySelector(".game-btn-container")

// Generate buttons
let gameButtonArray = [];
for (let i = 0; i < 3; i++)
{
    gameButtonArray.push(document.createElement("button"));
    gameButtonArray[i].className = buttonClassNames[i];
    gameButtonArray[i].textContent = choices[i];
    buttonContainer.appendChild(gameButtonArray[i]);

}

// Here the player will choose any of the 3 buttons
playerSelection(gameButtonArray);

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

function resetGame(){
    playerChoice = "";
    computerChoice = "";
    playerScore = 0;
    computerScore = 0;
    roundsCompleted = 0;
}

function game(playerChoice, computerChoice){
    const gameContainer = document.querySelector(".score-container");
    gameContainer.style.border = "1px solid black";
    const heading = document.createElement("h2");
    heading.textContent = "Score";
    gameContainer.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.innerHTML = `Computer Score: ${computerScore}
    <br>Player Score: ${playerScore}`;
    switch(true){
        case (playerChoice == "rock" && computerChoice == "scissors"):
        case (playerChoice == "scissors" && computerChoice == "paper"):
        case (playerChoice == "paper" && computerChoice == "rock"):
        case (playerChoice == "scissors" && computerChoice == "paper"):
            alert(`You Win! ${playerChoice} beats ${computerChoice}`);
            playerScore++;
            gameContainer.appendChild(paragraph);
            break;
        case (computerChoice == "rock" && playerChoice == "scissors"):
        case (computerChoice == "scissors" && playerChoice == "paper"):
        case (computerChoice == "paper" && playerChoice == "rock"):
        case (computerChoice == "scissors" && playerChoice == "paper"):
            alert(`You Lose! ${computerChoice} beats ${playerChoice}`);
            computerScore++;
            gameContainer.appendChild(paragraph);
            break;
        case (playerChoice == computerChoice):
            alert(`Tie!`);
            break; 
    }
    roundsCompleted++;
}

// Function to get player selection

function playerSelection(gameButtonArray){
    gameButtonArray[0].addEventListener("click", ()=>{
        playerChoice = "rock";
        computerChoice = getComputerChoice();
        //Start the game after getting both computer and player choices
        game(playerChoice, computerChoice);
        console.log(playerChoice.concat(" ") + computerChoice)
        console.log("rounds compelted: ".concat(roundsCompleted));
        if (roundsCompleted == TOTAL_ROUNDS)
        {
            decideWinner();
            resetGame();
            return;
        }
    });
    gameButtonArray[1].addEventListener("click", ()=>{
        playerChoice = "paper";
        computerChoice = getComputerChoice();
        game(playerChoice, computerChoice);
        console.log(playerChoice.concat(" ") + computerChoice)
        console.log("rounds compelted: ".concat(roundsCompleted));
        if (roundsCompleted == TOTAL_ROUNDS)
        {
            decideWinner();
            resetGame();
            return;
        }
    });
    gameButtonArray[2].addEventListener("click", ()=>{
        playerChoice = "scissors";
        computerChoice = getComputerChoice();
        game(playerChoice, computerChoice);
        console.log(playerChoice.concat(" ") + computerChoice)
        console.log("rounds compelted: ".concat(roundsCompleted));
        if (roundsCompleted == TOTAL_ROUNDS)
        {
            decideWinner();
            resetGame();
            return;
        }
    });
}

// Function to get computer choice

function getComputerChoice(){
    let random = new Math.seedrandom();
    console.log(`Random value: ${random()}`)
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(random() * 100); // return a random number from 0 - 3
    return choices[randomChoice % 3];
}