// Main function will always be called
function main(){
    console.log("script executed");
    let playerChoice = playerSelection();
}


//Function to get player selection

function playerSelection(){
    let playerChoice;
    while(true)
    {
        playerChoice = prompt("Rock, papers, or scissors?");
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

function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3); // return a random number from 0 - 3
    return choices[randomChoice];
}

main();