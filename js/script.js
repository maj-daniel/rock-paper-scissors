function getComputerChoice() {
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

function playRound(playerSelection) {
    //if playerSelection is rock, paper or scissors, test for each possibility of result
    //return 1 if win, -1 if lose and 0 for a tie
    if (playerSelection === "rock"){
        switch (getComputerChoice()) {
            case "rock":
                return 0;
            case "paper":
                return -1;
            case "scissors":
                return 1;
        }
    } else if (playerSelection === "paper"){
        switch (getComputerChoice()) {
            case "paper":
                return 0;
            case "scissors":
                return -1;
            case "rock":
                return 1;
        }
    } else if (playerSelection === "scissors"){
        switch (getComputerChoice()) {
            case "scissors":
                return 0;
            case "rock":
                return -1;
            case "paper":
                return 1;
        }
    }
}

function game(e) {
    let roundScore = playRound(e.target.id);
    //change score
    if (roundScore > 0 && humanScore < 5 | machineScore < 5){
        humanScore++;
    } else if (roundScore < 0 && humanScore < 5 | machineScore < 5){
        machineScore++;
    }

    if (humanScore > 4 || machineScore > 4){//check if someone has already won
        if (humanScore > machineScore){
            return board.textContent = "HUMAN WON!";
        } else {
            return board.textContent = "MACHINE WON!";
        }
    } else { //update scoreboard
        board.textContent = `Human Score = ${humanScore}   Machine Score = ${machineScore}`;
    }
}

const btns = document.querySelectorAll("button");
const board = document.querySelector("#board");
board.textContent = "Human Score = 0 Machine Score = 0";

let humanScore = 0;
let machineScore = 0;

btns.forEach(btn => {
    btn.addEventListener("click", game);
});