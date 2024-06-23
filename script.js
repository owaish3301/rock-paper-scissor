const rock = document.querySelector("#btn1");
const paper = document.querySelector("#btn2");
const scissor = document.querySelector("#btn3");
const shoot = document.querySelector("#shoot");
const shootWarning = document.querySelector("#shoot-warning");
const whoWon = document.querySelector("#result");
const playerScore = document.querySelector("#player-score");
const compScore = document.querySelector("#comp-score");

const rps = [rock, paper, scissor];
let playerSelected = null;
let compSelected = null;

const selected = (evt) =>{
    //if a player has already selected some button change its background color to original;
    if(playerSelected){
        document.getElementById(playerSelected).style.backgroundColor = "rgb(241, 187, 187)";
    }

    //if result is being displayed already hide it
    if(whoWon.style.display !== ""){
        whoWon.style.display = "";
    }

    const button = evt.target.closest('button');
    if(button){
        button.style.backgroundColor = "green";
        playerSelected = button.id;
        shootWarning.style.display = "";
    }
}


const shootHandler = (evt) => {
    if(!playerSelected){
        shootWarning.style.display = "block";
        return;
    }

    if ( Math.random() < 0.33 ){
        compSelected = rock;
    }
    else if (Math.random() >= 0.33 && Math.random() < 0.66){
        compSelected = paper;
    }
    else{
        compSelected = scissor;
    }


    const result = checkWinner();
    whoWon.innerHTML = result;
    whoWon.style.display = "block";


    updateScore(result);
}

const updateScore = (result) => {
    if(result === "Player won") {
        playerScore.innerHTML = Number(playerScore.innerHTML )+1;
    }
    if(result === "Comp won"){
        compScore.innerHTML = Number( compScore.innerHTML ) +1;
    }
}

const checkWinner = () => {
    if(playerSelected === "btn1"){ //btn1 = rock
        if(compSelected.id === "btn1" ) return "Draw";
        else if(compSelected.id === "btn2") return "Comp won";
        else return "Player won";
    }
    else if(playerSelected === "btn2"){ //btn2 = paper
        if(compSelected.id === "btn2" ) return "Draw";
        else if(compSelected.id === "btn3") return "Comp won";
        else return "Player won";
    }
    else { //scissors
        if(compSelected.id === "btn3" ) return "Draw";
        else if(compSelected.id === "btn1") return "Comp won";
        else return "Player won";
    }
}





rps.forEach((elem) => {
    elem.addEventListener("click",selected);
})

shoot.addEventListener("click",shootHandler)