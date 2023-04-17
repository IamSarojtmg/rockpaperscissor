const div = document.createElement('div');

const cuteCat = document.createElement('img')
cuteCat.src = './Img/cat-cute.gif'
div.style.display = 'flex'
div.style.justifyContent = 'center';
cuteCat.style.height = '200px'

const disDog = document.createElement('img')
disDog.src = './Img/disappointedDog.gif'
disDog.style.height = '200px'


let winScore = 0;
const winResult = document.querySelector('.winScore');
winResult.textContent = `You : ${winScore}`;

let loseScore = 0;
const loseResult = document.querySelector('.loseScore');
loseResult.textContent = `Alien : ${loseScore}`;

let drawScore = 0;
const drawResult = document.querySelector('.drawScore');
drawResult.textContent = `Tie : ${drawScore}`;

const final = document.querySelector('.finalScore');
final.textContent = 'Earth\'s fate?';

let finalWin;
let finalLoss; 
let finalDraw;

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


function playRound(playerSelection,computerSelection) {
    
    
    if(playerSelection === 'rock' && computerSelection === 'scissor' 
    || playerSelection === 'paper' && computerSelection === 'rock' 
    || playerSelection === 'scissor' && computerSelection === 'paper')
    {   
        winScore++;
        // return 'player win';
    }
    
    else if (playerSelection === computerSelection )
    {
        drawScore++;
        // return 'draw';
    }
    
    else 
    {
        loseScore++;
        // return 'player lose';
    }
    
};

function finalScore(winScore, loseScore, drawScore) {

    if(winScore === 5)
    {
        rock.removeEventListener('click', eventOfRock);
        paper.removeEventListener('click', eventOfPaper);
        scissor.removeEventListener('click', eventOfScissor);
        finalWin = 'Well done you saved the planet';
        div.appendChild(cuteCat)
        document.body.appendChild(div)
        return final.textContent = `${finalWin}`;
        
    }

    else if(loseScore === 5)
    {   
        rock.removeEventListener('click', eventOfRock);
        paper.removeEventListener('click', eventOfPaper);
        scissor.removeEventListener('click', eventOfScissor);
        finalLoss = 'Off to Mars then';
        div.appendChild(disDog)
        document.body.appendChild(div)
        return final.textContent = `${finalLoss}`;
    }

    else if (drawScore === 5)
    {
        rock.removeEventListener('click', eventOfRock);
        paper.removeEventListener('click', eventOfPaper);
        scissor.removeEventListener('click', eventOfScissor);
        finalDraw = 'It\'s a draw';
        return final.textContent = `${finalDraw}`;
    }
    
};
































