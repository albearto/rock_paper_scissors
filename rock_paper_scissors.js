function computerPlay() {
    //switch statement to chose a random number between 0 and 2 and return either rock, paper or scissors.
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return("Rock");
          break;
        case 1:
            return("Paper");
          break;
        case 2:
            return("Scissors");
    }
}

function playRound(playerSelection, computerSelection){
    // if player and computer selections are the same then it is a draw
    if (playerSelection == computerSelection){
        console.log("It's a draw! The computer chose " + computerSelection + " and you chose " + playerSelection + ".");
        return("draw");
    }
    // otherwise compare the player selection to the possible computer selections and return the result
    else if (playerSelection == "Rock"){
        if (computerSelection == "Paper") {
            console.log("You lose! The computer chose " + computerSelection + " and you chose " + playerSelection + ". Paper beats Rock.");
            return("lose");
        }
        else {
            console.log("You win! The computer chose " + computerSelection + " and you chose " + playerSelection + ". Rock beats Scissors.");
            return("win");
        }      
    }
    else if (playerSelection == "Paper"){
        if (computerSelection == "Scissors") {
            console.log("You lose! The computer chose " + computerSelection + " and you chose " + playerSelection + ". Scissors beats Paper.");
            return("lose");
        }
        else {
            console.log("You win! The computer chose " + computerSelection + " and you chose " + playerSelection + ". Paper beats Rock.");
            return("win");
        }         
    }
    else if (playerSelection == "Scissors"){
        if (computerSelection == "Rock") {
            console.log("You lose! The computer chose " + computerSelection + " and you chose " + playerSelection + ". Rock beats Scissors.");
            return("lose");
        }
        else {
            console.log("You win! The computer chose " + computerSelection + " and you chose " + playerSelection + ". Scissors beats Paper.");
            return("win");
        }         
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;
    
    for (let i = 1; i<6; i++){
        let playerSelection = formatPlayerSelection(prompt("Please enter your selection", "Rock/Paper/Scissors"));
        let computerSelection = computerPlay();
        
        console.log("game " + i + ":")
        let result = playRound(playerSelection, computerSelection)
        if (result == "win"){
            playerWins++;
        } 
        else if (result == "lose"){
            computerWins++;
        }
        else {
            draws++;
        }
    }
    console.log("Over 5 games: You won " + playerWins + ", the Computer won " + computerWins + ", and there were " + draws + " draws.");
    if (computerWins > playerWins){
        console.log("The Computer won overall! Unlucky");
    }
    else if (computerWins < playerWins){
        console.log("You won overall! Nice one");
    }
    else {
        console.log("Overall, it was a tie!")
    }
    
        
}


function formatPlayerSelection(playerSelection) {
    let lowerCase = playerSelection.toLowerCase(); // change player selection to lower case
    let firstChar = lowerCase.charAt(0);            // select first letter
    firstChar = firstChar.toUpperCase();                // capitalise first letter
    playerSelection = firstChar + lowerCase.slice(1);                       // return player selection in lower case with capitalised first letter
    return playerSelection;
}
  
game();