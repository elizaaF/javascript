// so basically we use localStorage to get the value permanently, then we wre able to save or store the value or score that we play previously.
const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};


updateScoreElement();


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if(result === 'You win.'){
    score.wins += 1;
  }else if('You lose.'){
    score.loses +=1;
  }else if('Tie.'){
    score.ties +=1;
  }

  // using localStorage to make the value permanently.
  //remember that localStorage only supports strings and we have to convert this'score' into strings using jso stringify or json method.
  localStorage.setItem('score', JSON.stringify(score));

 updateScoreElement();
 document.querySelector('.js-result')
 .innerHTML = result;

 document.querySelector('.js-moves')
 .innerHTML = `You
<img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
Computer`;

  
}

function updateScoreElement (){
  document.querySelector('.js-score')
  .innerHTML = `Wins:${score.wins}. Loses:${score.loses}. Ties:${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}