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
                return 1;
        }
    } else {
        return "Invalid input! Please try rock, paper or scissors!"
    }

}

function getValidInput () {
    //while input is invalid, ask for player to input properly
    //when input is valid, return the input
    while (true) {
        let input = prompt("What is your choice? Rock, paper or scissors?");
    //make input lower case, in order to make it case insensitive
        input = input.toLowerCase();
        if(input === "rock" || input === "paper" || input === "scissors"){
            return input;
        } else {
            alert("Input not valid! Please try again!");
        }
    }
}

function game() {
    //create variable score, initialized with 0
    let score = 0;


    //run it five times: sum the score with the value of the round (1, 0 and -1) using the user input in a prompt and a random choice from the computer
    for (let i = 0; i < 5; i++){
        const roundScore = playRound(getValidInput(), getComputerChoice());
        score += roundScore
        switch (roundScore) {
            case 1:
                console.log("Player Win!");
                break;
            case 0:
                console.log("Tie!");
                break;
            case (-1):
                console.log("Computer Win!");
                break;
        }
    }

    //if score > 1, it's a win, if score < 0, it's a lost and if score = 0, tie
    if (score > 0){
        console.log("Player Won The Gsame!");
    } else if (score < 0){
        console.log("Computer Won The Game!");
    } else {
        console.log("It's A Tie!");
    }
}