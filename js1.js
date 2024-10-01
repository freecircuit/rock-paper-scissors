
// attatch mouse click to button values
const buttons = document.querySelectorAll("button");
var humanScore = 0
var computerScore = 0

buttons.forEach ((button) => {
    button.addEventListener("click", (e) => {
        let computerChoice = getComputerChoice()
        playRound(e.target.id, computerChoice);
    })
})

function getComputerChoice()
{
   const num = Math.floor(Math.random() * 10 + 1) % 3;
   // console.log(num)
   if (num == 0) {
      var comp = "rock"
   }
   else if (num == 1) {
      var comp = "paper"
   }
   else {
      var comp = "scissors"
   }
   return comp
}

function playRound(humanChoice, computerChoice){
    var score = document.getElementById("Score");
    var humScore = document.getElementById("humChoice");
    var compScore = document.getElementById("computerChoice")
    
    if (humanChoice == "rock" && 
       computerChoice == "scissors"){
           humanScore ++
           alert("You win! Rock bests Scissors");
    }
    else if (humanChoice == "rock" &&
           computerChoice == "paper"){
               computerScore ++
               alert("You Lose! Paper beats Rock")
           }
   else if(humanChoice == "paper" &&   
           computerChoice == "rock"){
               humanScore ++
               alert("You Win! Paper beats Rock!")
           }
   else if(humanChoice == "paper" &&
           computerChoice == "scissors"){
               computerScore ++
               alert("You Lose! Scissors beats Rock!")
           }
   else if(humanChoice == "scissors" &&
           computerChoice == "rock"){
               computerScore ++
               alert("You Lose! Rock beats Scissors!")
           }
   else if(humanChoice == "scissors" &&
           computerChoice == "paper"){
           humanScore ++
           alert("You Win! Scissors beats Paper!")
           }
   else{
       alert("It's a tie!")
   }

   if(humanScore >= 5){
    score.textContent = "You Win!!";
    computerScore = 0
   }
   else if(computerScore >= 5){
    score.textContent = "You Lose!!";
    humanScore = 0
   }
   else{
    humScore.textContent = "your score: " + humanScore;
   compScore.textContent = "computer score: " + computerScore;}}
