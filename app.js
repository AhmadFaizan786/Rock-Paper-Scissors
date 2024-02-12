let userScore = 0;
let compScore = 0;


//firstly we have to access the choices 
//and add onclick event listeners on it. 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock , paper , scissors
}

const drawGame = () => {
    console.log("Game was Draw!");
    msg.innerText = "Game was draw! Play Again";
    msg.style.backgroundColor = "#081b31";

};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) =>{
    //Generate computer choice
    const compChoice = genComputerChoice();

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //computer choice must be paper or scissors
            userWin = compChoice === "paper" ? false: true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false:true;
        }else{
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});