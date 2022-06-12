let computerPoints = 0;
let playerPoints = 0;
function computerPlay(){
    let randNum = Math.floor(Math.random() * 3);
    if(randNum == 1){
        return "Rock"
    }
    else if(randNum == 2){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}
console.log(computerPlay())

function playRounds(playerSelection, computerSelection){
 if(playerSelection =="Rock" && computerSelection == "Paper"){
     return"computer wins paper beats rock"
 }
 else if(computerSelection =="Rock" && playerSelection == "Paper"){
    return"player1 wins paper beats rock"
}
else if(computerSelection =="Scissors" && playerSelection == "Rock"){
    return "Player1 wins rocks crush scissors"
}
else if(playerSelection =="Scissors" && computerSelection == "Rock"){
    return "computer wins rock beats scissors"
}
else if(computerSelection =="Scissor" && playerSelection == "Paper"){
    return "computer wins Scissor cuts paper"
}
else if(playerSelection =="Scissor" && computerSelection == "Paper"){
    return "player1 wins Scissor cuts paper"
}
else if(playerSelection == computerSelection){
    return "Ties"
}

}


for(let i = 1; i <=5; i++) {
    playerSelection = prompt("Please select one Rock, Paper, or Scissors")
    computerSelection = computerPlay()
    console.log(playRounds(playerSelection, computerSelection))
    function gamePlay() {
        if(playerSelection =="Rock" && computerSelection == "Paper" || playerSelection =="Scissors" && computerSelection == "Rock" || computerSelection =="Scissor" && playerSelection == "Paper")
         {
            computerPoints += 1;
        }
      else if (computerSelection =="Rock" && playerSelection == "Paper" || computerSelection =="Scissors" && playerSelection == "Rock" || playerSelection =="Scissor" && computerSelection == "Paper"){
            playerPoints += 1;
      }
      else{
          playerPoints += 0;
          computerPoints += 0;
      }
    }
    gamePlay()
}
    console.log(`player points is ${playerPoints} points`)
    console.log(`Computer points is ${computerPoints} points`)
if (computerPoints > playerPoints){
    console.log("computer wins")
}
else if(playerPoints > computerPoints){
    console.log("computer losses")
}
else{
    console.log("Its a tie play again")
}