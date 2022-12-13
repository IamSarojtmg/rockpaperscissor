
// // create a function for a computer that will return rock,paper or scissor. 

// function getComputerChoice() {
//     let choices = ['rock','paper','scissor']

//     let getRandom = choices[Math.floor(Math.random() * choices.length)]
//     // choices.length for randon three arrays on choices
//     return(getRandom)

// }
// let playerSelection
// let computerSelection
// let conversion
// let winRock = 'You win as rock beats scissor'
// let winScissor = 'you win scissor beats paper'
// let winPaper = 'you win as paper beats rock'
// let loseRock = 'you lose as paper beats rock'
// let loseScissor = 'you lose rock beats scissor'
// let losePaper = 'you lose scissor beats paper'





// function playRound() {
//     playerSelection = prompt('Enter rock, paper or scissor');
    
//     computerSelection = getComputerChoice();
    
//     conversion = playerSelection.toLowerCase()//convert string to lower case
//     console.log(conversion)
    
//     if (conversion === 'rock' && computerSelection === 'paper') {
//         console.log(loseRock) 
//     }
    
//     else if (conversion === 'rock' && computerSelection === 'scissor' ) {
//         console.log(winRock)
//     }
//     else if (conversion === 'paper' && computerSelection === 'rock'){
//         console.log(winPaper)
//     }
    
//     else if (conversion === 'paper' && computerSelection === 'scissor'){
//         console.log(losePaper)
//     }
    
//     else if (conversion === 'scissor' && computerSelection === 'paper'){
//         console.log(winScissor)
//     }
    
//     else if (conversion === 'scissor' && computerSelection === 'rock') {
//         console.log(loseScissor)
//     }
    
//     else {
//         console.log('Draw!!')
//     }
    
// }



// playRound() //function call






































// function game () {
//     for (i = 0; i < 4; i++) {
//         playRound()
//     }
// }

// game()
