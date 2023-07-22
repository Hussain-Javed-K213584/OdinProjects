// Main function will always be called
function main(){
    console.log("script executed");
    let askComputer = getComputerChoice();
    console.log(askComputer);
}


function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * 3); // return a random number from 0 - 3
    console.log(randomChoice)
    return choices[randomChoice];
}

main();