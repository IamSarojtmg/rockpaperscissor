
// create a function for a computer that will return rock,paper or scissor. 

function getComputerChoice() {
    let choices = ['rock','paper','scissor']

    let getRandom = choices[Math.floor(Math.random() * choices.length)]
    // choices.length for randon three arrays on choices
    return(getRandom)

}

//function for one single round. 
// Takes two parameter 
let playerSelection = prompt('Enter rock, paper or scissor')
let computerSelection = getComputerChoice()


//create a function
function playRound(playerSelection, computerSelection) {
    let conversion = playerSelection.toLowerCase()
    console.log(conversion)

    if (conversion === 'rock' && computerSelection === 'paper') {
        alert('you lose as paper beats rock')
    }
    
    else if (conversion === 'rock' && computerSelection === 'scissor' ) {
        alert('You win as rock beats scissor')
    }
    
    else if (conversion === 'paper' && computerSelection === 'rock'){
        alert('you win as paper beats rock')
    }
    
    else if (conversion === 'paper' && computerSelection === 'scissor'){
        alert('you lose scissor beats paper')
    }
    
    else if (conversion === 'scissor' && computerSelection === 'paper'){
        alert('you win scissor beats paper')
    }
    
    else if (conversion === 'scissor' && computerSelection === 'rock') {
        alert('you lose rock beats scissor')
    }
    
    else {
        alert('Draw!!')
    }
    
    console.log(computerSelection);
}

let result = playRound(playerSelection,computerSelection)



