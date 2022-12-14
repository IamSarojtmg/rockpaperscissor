//Random choices generator
function getComputerChoice() {
    let choices = ['rock','paper','scissor']
    
    let getRandom = choices[Math.floor(Math.random() * choices.length)]
    // math.floor will round down and return a whole number nearest to the provided number. e.g 5.60 will be 5, -2.33 will be 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor#:~:text=The%20Math.floor()%20function,equal%20to%20a%20given%20number.
    // math.random will return between 0 and 1.
    // choices.length for randon three arrays on choices
    return(getRandom)
    
}

//This runs the section of game where the user enters his answers and get the result.
const playRound = function () {
    
    playerSelection = prompt('Enter rock, paper or scissor');

    computerSelection = getComputerChoice();
    //global function can be pulled inside.
    
    conversion = playerSelection.toLowerCase()//convert string to lower case
    // console.log(conversion)
    // console.log(computerSelection)

    if (conversion === 'paper' && computerSelection === 'rock') {
        alert('You win. Paper beats rock') // using alert this way so that the if statement does not return undefined.
        return 'You win. Paper beats rock' // must use return so that it can return a value.
    }
    
    else if (conversion === 'paper' && computerSelection === 'scissor') {
        alert('You lose. Paper loses to scissor')
        return 'You lose. Paper loses to scissor'
    }
    
    else if (conversion === 'rock' && computerSelection === 'paper') {
        alert('You lose. Paper beats rock')
        return 'You lose. Paper beats rock'
    }
    
    else if (conversion === 'rock' && computerSelection === 'scissor'){
        alert('You win. Rock beats scissor')
        return 'You win. Rock beats scissor'
    }
    
    else if (conversion === 'scissor' && computerSelection === 'rock'){
        alert('You lose. Rock beats scissor')
        return 'You lose. Rock beats scissor'
    }
    
    else if (conversion === 'scissor' && computerSelection === 'paper'){
        alert('You win. Scissor beats paper')
        return 'You win. Scissor beats paper'
    }
    
    else {
        alert('You got a Draw')
        return 'Draw'
    }
    
    
}

//this is a code for adding scores to the users game.
let win = 0
function getWinScore(){
    ++win; //adding one everytime.
    document.getElementById('winScore').innerHTML = win //'winScore' is connected to the id section of the HTML. innerHTML connects this code to the variable.
}


let lose = 0
function getLoseScore () {
    ++lose
    document.getElementById('loseScore').innerHTML = lose;
}


let draw = 0
function getDrawScore (){
    ++draw
    document.getElementById('drawScore').innerHTML = draw
}





//this code will run the game 5 times and also process the scoring functions.
function game(){
    for(i = 0;i <= 4; i++) //using loop to run it 5 times. It starts at 0 and finishes at 4 so a total of 5 loops.
    {   
        let roundResult = playRound() // changing into variabe to be used in the if statement.
        console.log(roundResult)
        
        
        if (roundResult === 'You win. Paper beats rock'
        || roundResult === 'You win. Rock beats scissor'
        || roundResult === 'You win. Scissor beats paper')
        {
            getWinScore()
        }

        else if ( roundResult === 'You lose. Paper loses to scissor'
        || roundResult === 'You lose. Paper beats rock'
        || roundResult === 'You lose. Rock beats scissor') 
        {
            getLoseScore()
        }

        else if ( roundResult === 'Draw') 
        {
            getDrawScore()
        }
        
            console.log(win)
            console.log(lose)             
        }
    }
    
    
    game()
    

//this section will display the user of his final score.
let finalScore;

if (win > lose && win > draw) 
{
    finalScore = 'Congratulation you won the game'
}

else if (lose > win && lose > draw)
{
    finalScore = 'You lost the game'
}

else if (draw > win && draw > lose)
{
    finalScore = 'The match is a draw'
}

else finalScore = 'No result. Play again'

document.getElementById('finalScore').innerHTML = finalScore;

















    
    
    // Why does the contents dissappear when on prompt?
    // Maybe get rid of prompt and find a new way for the user to choose their input.
    
    
    
    
    
    
    
    

    
    
    
    
    









    
    
    
    
    
        










        // sessionStorage.setItem('win', win)
        // let winResult = sessionStorage.getItem('win')
        
        // document.write(winResult)