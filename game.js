let Userscore = 0;
let Comscore = 0;

const getclass = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const com_display = document.querySelector('#com-display');
const user_display = document.querySelector('#user-display');


const user_score = document.querySelector('#user-score');
const com_score = document.querySelector('#comp-score');

const ComChoice = () => {
    const arr = ["rock", "paper", "sissor"];
    const random = Math.floor(Math.random() * 3);
    com_display.innerText = "computer choice:" + arr[random];
    return arr[random];
}
const Gamedraw=()=>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "blue";

}

const ShowIn = (win,GetComChoice,GetUserChoice) => {
    if (win)
    {
        Userscore++;
        user_score.innerText = Userscore;
        msg.innerText = `You win ${GetUserChoice} Beats ${GetComChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        Comscore++;
        com_score.innerText = Comscore;
        msg.innerText = `You lost. ${GetComChoice} Beats ${GetUserChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (GetUserChoice) => {
    
    const GetComChoice = ComChoice();


    if (GetUserChoice === GetComChoice) {
        Gamedraw();
        
    } else {
        let win = true;
        if (GetUserChoice === "rock")//sissor //paper
        {
            win = GetComChoice === "paper" ? false : true;
        }
        else if (GetUserChoice === "paper")//rock //papper
        {
            win = GetComChoice === "sissor" ? false : true;
        }
        else {//papper
            win = GetComChoice === "rock" ? false : true;
        }
        ShowIn(win,GetComChoice, GetUserChoice);
    }
    
};

getclass.forEach((choice) => {
    choice.addEventListener('click', ()=> {
        let GetUserChoice = choice.getAttribute('id');
        user_display.innerText = "your choice :" + GetUserChoice;  
        playgame(GetUserChoice);
    })
});