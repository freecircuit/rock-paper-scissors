console.log("hello")

 ///getcomputerchoice: increase math.random by factor of ten
 //average down to nearest whole number
 //and % 3
 //assign resulting 3 (0, 1, 2) individual numbers to rock, paper, or scissors

 function getComputerChoice()
 {
    const num = Math.floor(Math.random() * 10 + 1) % 3;
    console.log(num)
    if (num == 0) {
        comp = "rock"
    }
    else if (num == 1) {
        comp = "paper"
    }
    else {
        comp = "scissors"
    }
    return comp
    
 }
 console.log(getComputerChoice())
 //gethumanchoice: prompt user for rock, paper, or scissors
 //loop to repeat prompt if user enters something other than rock paper or scissors
 //user input is reduced to same case (lower case) as computer
 //assign choice = input
//  let choice = prompt("rock, paper or scissors?")