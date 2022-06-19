let computerPoints = 0;
let playerPoints = 0;
let computerSelectionBtn = document.querySelectorAll(".player-selection-btn");
let playerSelectionBtn = document.querySelectorAll(".player-selection-btn");
let roundWinner = document.querySelector("#round-winner");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let winner = document.querySelector("#winner");
let card = document.querySelector(".card");
let btnPlay = document.querySelector(".btn-play");
let btnExit = document.querySelector(".btn-exit");

console.log(computerSelectionBtn);
console.log(playerSelectionBtn);
function displayCard(){
    card.style.display = "block";
    btnPlay.addEventListener("click",function(){
        location.reload();
    })
    btnExit.addEventListener("click",function(){
        window.open();
        window.close();

    })
}

function computerPlay(){
    let randNum = Math.floor(Math.random() * 3);
    if(randNum == 1){
        return computerSelectionBtn[1].value
    }
    else if(randNum == 2){
        return computerSelectionBtn[0].value
    }
    else{
        return computerSelectionBtn[2].value
    }
}
console.log(computerPlay());
function playRounds(playerSelection, computerSelection){
 if(playerSelection == "Rock" && computerSelection == "Paper"){
      roundWinner.textContent = "computer wins paper beats rock"
      computerScore.textContent = ++computerPoints 
 }
 else if(computerSelection =="Rock" && playerSelection == "Paper"){
    roundWinner.textContent = "player1 wins paper beats rock"
    playerScore.textContent = ++playerPoints
}
else if(computerSelection =="Scissors" && playerSelection == "Rock"){
    roundWinner.textContent = "Player1 wins rocks crush scissors"
    playerScore.textContent = ++playerPoints 
}
else if(playerSelection =="Scissors" && computerSelection == "Rock"){
    roundWinner.textContent = "computer wins rock beats scissors"
    computerScore.textContent = ++computerPoints 
}
else if(computerSelection =="Scissor" && playerSelection == "Paper"){
    roundWinner.textContent = "computer wins Scissor cuts paper"
    computerScore.textContent = ++computerPoints 
}
else if(playerSelection =="Scissor" && computerSelection == "Paper"){
    roundWinner.textContent = "player1 wins Scissor cuts paper"
    computerScore.textContent = ++playerPoints 
}
 else{
     roundWinner.innerHTML ="Ties"
 }
}



function checkWinner(){
    if ((computerPoints > playerPoints) && (computerPoints == 5)){
        winner.textContent = "computer wins"
        displayCard()
    }
    else if((playerPoints > computerPoints) &&(playerPoints == 5)){
        winner.textContent = "computer losses"
        displayCard()
    }
}

playerSelectionBtn.forEach(button => {
    button.addEventListener('click',getPlayerSelection)
});

function getPlayerSelection(e){
        let playerSelection = (e.currentTarget.value);
        let computerSelection = computerPlay();
        playRounds(playerSelection, computerSelection);
        checkWinner();
    
}

   

