console.log("hello")

// Declare variables
let comp = '';
let human = '';

 ///getcomputerchoice: increase math.random by factor of ten
 //average down to nearest whole number
 //and % 3
 //assign resulting 3 (0, 1, 2) individual numbers to rock, paper, or scissors

 function getComputerChoice()
 {
    const num = Math.floor(Math.random() * 10 + 1) % 3;
    console.log(num)
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
 console.log(getComputerChoice())
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
        human = prompt("rock, paper, scissor:")
    }
  return human
  
 
 }
 // assign values from functions to global constants
 const humChoice = getHumanChoice()
 const compChoice = getComputerChoice()
 console.log(alert( humChoice == 'rock'))
 
