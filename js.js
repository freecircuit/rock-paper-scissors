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
 
humanScore = 0
computerScore = 0

// create function for single round of game
//take inputs from computer and user to utilize as variables of the function
//use switch statement for variable comparison, resulting increment of score, and text declaring winner/loser
//