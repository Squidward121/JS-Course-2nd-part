let Score = JSON.parse(localStorage.getItem('Score'));
const rock = document.querySelector('.js-rock');
const paper = document.querySelector('.js-paper');
const scissor = document.querySelector('.js-scissor'); 


updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() 
{
  if(!isAutoPlaying)
  {
    // "setInterval()" always return value like an id, and we can save it to an variable for referencing the "setInterval()" later.
    intervalId = setInterval(function() {
      const PlayerMove = pick_ComputerMove();
      PlayGame(PlayerMove);
    }, 1000);
    isAutoPlaying = !isAutoPlaying;
  }
  else
  {
    // "clearInterval()" clears or remove an "setInterval()", and we can use the "intervalId" to reference the "setInterval()" that we want to remove.
    clearInterval(intervalId);
    isAutoPlaying = !isAutoPlaying;
  }
}


rock.addEventListener('click', () => {
  PlayGame('Rock');
});

paper.addEventListener('click', () => {
  PlayGame('Paper');
});

scissor.addEventListener('click', () => {
  PlayGame('Scissor');
});



document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r')
  {
    PlayGame('Rock');
  }
  else if(event.key === 'p')
  {
    PlayGame('Paper');
  }
  else if(event.key === 's')
  {
    PlayGame('Scissor');
  }
});




function PlayGame(PlayerMove)
{
  const ComputerMove = pick_ComputerMove();
  let result;

  // for the Rock Move from the Player
  if(PlayerMove === 'Rock')
  {
    if( ComputerMove === 'Rock')
    { 
      result = "it's a tie!";
    }

    else if(ComputerMove === 'Paper')
    {
      result = "You Lose!";
    }

    else if(ComputerMove === 'Scissor')
    {
      result = "You Won!";
    }
  }


  // for the Paper Move from the Player
  else if(PlayerMove === 'Paper')
  {
    if( ComputerMove === 'Rock')
    {
      result =  "You Won!";
    }

    else if(ComputerMove === 'Paper')
    {
      
      result =  "it's a tie!";
    }

    else if(ComputerMove === 'Scissor')
    {
      result =  "You Lose!";
    }
  }


  // for the Scissor Move from the Player
  else if(PlayerMove === 'Scissor')
  {
    if( ComputerMove === 'Rock')
    {
      result = "You Lose!";
    }

    else if(ComputerMove === 'Paper')
    {
      result = "You Won!";
    }

    else if(ComputerMove === 'Scissor')
    {
      result = "it's a tie!";
    }
  }


  // to interpret the result with Score : 
  if(result === "You Won!")
  {
    Score.Wins++;
  }
  else if(result === "You Lose!")
  {
    Score.Losses++;
  }
  else if(result === "it's a tie!")
  {
    Score.Ties++;
  }


  localStorage.setItem('Score', JSON.stringify(Score));


  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-picks').innerHTML = `  You
  <img src="./RPS images/${PlayerMove}-emoji.png">
  <img src="./RPS images/${ComputerMove}-emoji.png">
  Computer`;


  updateScoreElement();
  
  
}


function updateScoreElement()
{
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${Score.Wins}, Ties: ${Score.Ties}, Losses: ${Score.Losses} `;
}


// to reset the score
function resetScore(condition)
{
  if(condition === "reset")
  {
    Score.Wins = 0;
    Score.Ties = 0;
    Score.Losses = 0;
  }

  localStorage.setItem('Score', JSON.stringify(Score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = null;

  document.querySelector('.js-picks').innerHTML = null;

}



// for computer to pick a move.
function pick_ComputerMove()
{
  const randomNumber = Math.random();
  let ComputerMove;

  if(randomNumber >= 0 && randomNumber < 1/3)
  {
    ComputerMove = 'Rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3)
  {
    ComputerMove = 'Paper';
  }
  else
  {
    ComputerMove = 'Scissor';
  }

  return ComputerMove;
}