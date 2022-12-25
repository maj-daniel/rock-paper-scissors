function getComputerChoice (){
    //Pass a random integer from 0 - 2 to a switch and return one of the strings (rock, paper or scissors), acording to the integer 
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    //if playerChoice is rock, paper or scissors, test each possibility of result
    //return 1 if win, -1 if lose and 0 for a tie
    //else, say to player to give a compatible input.
    if (playerSelection === "rock"){
        switch (computerSelection) {
            case "rock":
                return 0;
            case "paper":
                return -1;
            case "scissors":
                return 1;
        }
    } else if (playerSelection === "paper"){
        switch (computerSelection) {
            case "paper":
                return 0;
            case "scissors":
                return -1;
            case "rocks":
                return 1;
        }
    } else if (playerSelection === "scissors"){
        switch (computerSelection) {
            case "scissors":
                return 0;
            case "rock":
                return -1;
            case "paper":
                return "Player win";
        }
    } else {
        return "Invalid input! Please try rock, paper or scissors!"
    }

}