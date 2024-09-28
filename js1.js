
// getComputerChoice();
// playRound();

// attatch mouse click to button values
const buttons = document.querySelectorAll("button");
var humChoice = document.querySelectorAll("input");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.id);
        var humChoice = document.getElementById('humChoice');
        humChoice.innerHTML = '<h3> '+e.target.id+'</h3>'


        

        var computerChoice = getComputerChoice().toLocaleLowerCase();
        var humanChoice = e.target.id;

        var compChoice = document.getElementById('computerChoice');
        compChoice.innerHTML = '<h3> '+computerChoice+'</h3>'
        playRound(humanChoice, computerChoice);



    })
})

// play round function

function playRound(humanChoice, computerChoice){
    var humanScore = 0
    var computerScore = 0
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
   }}

// Computer input:
function getComputerChoice()
{
   const num = Math.floor(Math.random() * 10 + 1) % 3;
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