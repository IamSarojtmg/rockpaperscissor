function getComputerChoice() 
{
    let choices = ['rock','paper','scissor']
    
    let getRandom = choices[Math.floor(Math.random() * choices.length)]

    return(getRandom)
};

const rock = document.querySelector('.rock');
rock.addEventListener('click', eventOfRock);
function eventOfRock() {
    const playerSelection = 'rock'
    const computerSelection = getComputerChoice()
    playRound(playerSelection,computerSelection)
    winResult.textContent = `You : ${winScore}`;
    loseResult.textContent = `Alien : ${loseScore}`;
    drawResult.textContent = `Tie : ${drawScore}`;
    finalScore(winScore, loseScore, drawScore)
    };

const paper = document.querySelector('.paper');
paper.addEventListener('click', eventOfPaper);
function eventOfPaper() {
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    winResult.textContent = `You : ${winScore}`;
    loseResult.textContent = `Alien : ${loseScore}`;
    drawResult.textContent = `Tie : ${drawScore}`;
    finalScore(winScore, loseScore, drawScore);
};

const scissor = document.querySelector('.scissor');
scissor.addEventListener('click', eventOfScissor);
function eventOfScissor() 
{
    const playerSelection = 'scissor';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    winResult.textContent = `You : ${winScore}`;
    loseResult.textContent = `Alien : ${loseScore}`;
    drawResult.textContent = `Tie : ${drawScore}`;
    finalScore(winScore, loseScore, drawScore) 
};

let winScore = 0;
const winResult = document.querySelector('.winScore');
winResult.textContent = `You : ${winScore}`;

let loseScore = 0;
const loseResult = document.querySelector('.loseScore');
loseResult.textContent = `Alien : ${loseScore}`;

let drawScore = 0
const drawResult = document.querySelector('.drawScore');
drawResult.textContent = `Tie : ${drawScore}`;

const final = document.querySelector('.finalScore');
final.textContent = 'Final Result';

let finalWin = '';
let finalLoss = '';
let finalDraw = '';

function playRound(playerSelection,computerSelection) {
    
    
    if(playerSelection === 'rock' && computerSelection === 'scissor' 
    || playerSelection === 'paper' && computerSelection === 'rock' 
    || playerSelection === 'scissor' && computerSelection === 'paper')
    {   
        winScore++;
        return 'player win';
    }
    
    else if (playerSelection === computerSelection )
    {
        drawScore++;
        return 'draw';
    }
    
    else 
    {
        loseScore++;
        return 'player lose';
    }
    
};

function finalScore(winScore, loseScore, drawScore) {

    if(winScore === 5)
    {
        rock.removeEventListener('click', eventOfRock);
        paper.removeEventListener('click', eventOfPaper);
        scissor.removeEventListener('click', eventOfScissor);
        finalWin = 'You won! You are the best';
        return final.textContent = `Final Result ${finalWin}`;
        
               
    }

    else if(loseScore === 5)
    {   
        rock.removeEventListener('click', eventOfRock);
        paper.removeEventListener('click', eventOfPaper);
        scissor.removeEventListener('click', eventOfScissor);
        finalLoss = 'Don\'t worry champ. Keep trying until you succeed';
        return final.textContent = `Final Result ${finalLoss}`;
    }

    else if (drawScore === 5)
    {
        rock.removeEventListener('click', eventOfRock);
        paper.removeEventListener('click', eventOfPaper);
        scissor.removeEventListener('click', eventOfScissor);
        finalDraw = 'It\'s a draw';
        return final.textContent = `Final Result ${finalDraw}`;
    }
    
};
































