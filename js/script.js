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