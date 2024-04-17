let userScore = 0;
let compScore = 0;
const us = document.querySelector("#user");
const cs = document.querySelector("#comp");
const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const genCompChoice = ()=>{
    const option = ["rock","paper","scissors"];
    const i = Math.floor(Math.random()*3);
    return option[i];
}


const win = (userWin) =>{
    if(userWin)
    {
        userScore++;
        us.innerText = userScore;
        console.log("You win");
        msg.innerText = "you win";
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        cs.innerText = compScore;
        console.log("You lose");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}
const draw = () =>{
    console.log("game was draw");
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#120238";
}


const playGame = (userChoice) =>{
    console.log("User choice is ",userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice is ",compChoice);

    if(userChoice === compChoice)
    {
        draw();
    }
    else
    {
        let userWin = true;
        if(userChoice === "paper")
        {
            userWin = (compChoice === "rock")?true:false;
        }
        else if(userChoice === "rock")
        {
            userWin = (compChoice === "paper")?false:true;
        }
        else
        {
            userWin = (compChoice === "rock")?false:true;
        }
        win(userWin)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => 
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})