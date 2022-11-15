
// create a function for a computer that will return rock,paper or scissor. 

function getComputerChoice() {
    let choices = ['rock','paper','scissor']

    let getRandom = choices[Math.floor(Math.random() * choices.length)]
    // choices.length for randon three arrays on choices
    return(getRandom)

}
let playerSelection
let computerSelection

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Enter rock, paper or scissor');
    
    computerSelection = getComputerChoice();
    
    const conversion = playerSelection.toLowerCase()//convert string to lower case
    
    if (conversion === 'rock' && computerSelection === 'paper') {
        console.log('you lose as paper beats rock')
    }
    
    else if (conversion === 'rock' && computerSelection === 'scissor' ) {
        console.log('You win as rock beats scissor')
    }
    
    else if (conversion === 'paper' && computerSelection === 'rock'){
        console.log('you win as paper beats rock')
    }
    
    else if (conversion === 'paper' && computerSelection === 'scissor'){
        console.log('you lose scissor beats paper')
    }
    
    else if (conversion === 'scissor' && computerSelection === 'paper'){
        console.log('you win scissor beats paper')
    }
    
    else if (conversion === 'scissor' && computerSelection === 'rock') {
        console.log('you lose rock beats scissor')
    }
    
    else {
        console.log('Draw!!')
    }
    
}

playRound(playerSelection,computerSelection) //function call


function game () {
    for (i = 0; i < 4; i++) {
        playRound()
    }

}

game()
