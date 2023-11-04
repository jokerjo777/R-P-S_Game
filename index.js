let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  tie: 0
};

// if (!score) {
//   score = 
// }

function function2(chosen) {
  function1();

  const computerMove = function1();

  let result = '';

  if(chosen === '✌️') {
    if(computerMove === '✊') {
      result = 'lose'
    } else if (computerMove === '🖐️') {
      result = 'win'
    } else if (computerMove === '✌️') {
      result = 'tie'
    }

  } else if (chosen === '🖐️') {
    if(computerMove === '✊') {
      result = 'win';
    } else if (computerMove === '🖐️') {
      result = 'tie';
    } else if (computerMove === '✌️') {
      result = 'lose';
    }

  } else if (chosen === '✊') {
    if(computerMove === '✊') {
      result = 'tie';
    } else if (computerMove === '🖐️') {
      result = 'lose';
    } else if (computerMove === '✌️') {
      result = 'win';
    }
  }

  if(result === 'win') {
    score.win += 1;
  } else if (result === 'lose') {
    score.lose += 1
  } else if (result === 'tie') {
    score.tie += 1
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.getElementById('lol').innerHTML = `${result}`
  document.getElementById('some').innerHTML = `You ${chosen}  ||  ${computerMove} Computer.`;
  document.getElementById('text').innerHTML = `win = ${score.win}`
  document.getElementById('text2').innerHTML = `lose = ${score.lose}`
  document.getElementById('text3').innerHTML = `tie = ${score.tie}`
}


function function1() {
  const randomNumber = Math.random();

  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = '✊';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = '🖐️';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = '✌️';
  }
  return computerMove;
}