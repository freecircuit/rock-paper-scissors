console.log("hello")


 ///getcomputerchoice: increase math.random by factor of ten
 //average down to nearest whole number
 //and % 3
 //assign resulting 3 (0, 1, 2) individual numbers to rock, paper, or scissors
 

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
 //gethumanchoice: prompt user for rock, paper, or scissors
 //loop to repeat prompt if user enters something other than rock paper or scissors
 //user input is reduced to same case (lower case) as computer
 //assign choice = input
 function getHumanChoice()
 {
    let human = prompt("rock, paper or scissors?");
    while (human.toLowerCase() !== 'rock' &&
            human.toLowerCase() !== 'paper' &&
            human.toLowerCase() !== 'scissors') {
        human = prompt("Please choose either rock, paper, or scissors:")
    }
  return human
  
 
 }
 // assign values from functions to global constants
 const humChoice = getHumanChoice().toLowerCase()
 const compChoice = getComputerChoice().toLowerCase()
 console.log(humChoice)
 console.log(compChoice)

 
    var humanScore = 0
    var computerScore = 0
    
// create function for single round of game
//take inputs from computer and user to utilize as variables of the function
//set relationdship between rock, paper and scissors according to rules of the game
//use if-else statement for variable comparison, resulting increment of score, and text declaring winner/loser
//
var y = humanScore
var x = computerScore

function add(g, h){
    if (g > x){
        return computerScore
    }
    else if (h > y){
        return humanScore
        }
}

function playRound(humanChoice, computerChoice){
    
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

    if(humanScore > x){
        return humanScore
    }
    else if(computerScore > y){
        return computerScore
    }

}
console.log(playRound(humChoice, compChoice))

console.log(humanScore)
console.log(computerScore)
// const n = playRound(humChoice, compChoice)
// console.log(playGame())


// function playGame(){
//     x = humanScore + x
//     y = computerScore + y
//     do{
//         getComputerChoice();
//         getHumanChoice();
//         playRound(humChoice, compChoice);
        
//     }
//     while( x > 5 || y > 5)
        

// }