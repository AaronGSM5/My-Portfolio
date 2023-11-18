// VARS
// VARS
let u = ['', '', '']; //upper game row
let m = ['', '', '']; //middle game row
let b = ['', '', '']; //bottom game row

let crossTurn = false; //Checks if its Crosses Turn
let GameON = true;
let n = 0; //Checks how many moves has been made
let computerInterval;
let computerIsPlaying = 0;

const score = {
  x: 0,
  o: 0
}
// VARS
// VARS


// FUNCTIONS FUNCTIONS FUNCTIONS
// FUNCTIONS FUNCTIONS FUNCTIONS
function playGame(row, number, rowstring) {
  if (GameON && row[number] === '') {
    let num = 0

    if (!crossTurn) {
      num = 1
      row[number] = num
      crossTurn = true;

    }
    else  {
      num = 2
        row[number] = num
        crossTurn = false;
    }
    const specificButton = `button-${rowstring}${number}`

    document.querySelector(`.${specificButton}`)
    .innerHTML = `<img class="icons" src="tictactoe-images/game${num}.svg">`
    n++;
    checkForWin(num);
    }

    else {
      return false;
    }
}

function playComputer () {
  if (computerIsPlaying === 0) {
    computerIsPlaying = 1;

    computerInterval = setInterval(() => {
      if (crossTurn === true) {
        const random = Math.random();

        if      (random <  1/9) {playGame(u, 0, 'u')}
        else if (random <  2/9) {playGame(u, 1, 'u')}
        else if (random <  3/9) {playGame(u, 2, 'u')}
        else if (random <  4/9) {playGame(m, 0, 'm')}
        else if (random <  5/9) {playGame(m, 1, 'm')}
        else if (random <  6/9) {playGame(m, 2, 'm')}
        else if (random <  7/9) {playGame(b, 0, 'b')}
        else if (random <  8/9) {playGame(b, 1, 'b')}
        else if (random <  9/9) {playGame(b, 2, 'b')}
      }
    }, 200)

    document.querySelector('.friend').classList.remove('is-active')
    document.querySelector('.computer').classList.add('is-active')
  }
}

function playFriend() {
  if (computerIsPlaying === 1) {
  clearInterval(computerInterval)
  computerIsPlaying = 0;
  
  document.querySelector('.computer').classList.remove('is-active')
  document.querySelector('.friend').classList.add('is-active')
  }
}

function checkForWin(num) {
  //Check Horizontal
  if (u[0] === num && u[1] === num && u[2] === num ) {
    win(num);
  }
  
  if (m[0] === num && m[1] === num && m[2] === num) {
    win(num);
  }
  
  if (b[0] === num && b[1] === num && b[2] === num) {
    win(num);
  }

  //Check Vertical
  if (b[0] === num && m[0] === num && u[0] === num) {
    win(num);
  }
  if (b[1] === num && m[1] === num && u[1] === num) {
    win(num);
  }
  if (b[2] === num && m[2] === num && u[2] === num) {
    win(num);
  }

  //Check Diagonal
  if (u[0] === num && m[1] === num && b[2] === num) {
    win(num);
  }
  if (b[0] === num && m[1] === num && u[2] === num) {
    win(num);
  }
  //Check if Tie
  if (n===9) {
      GameON = false;
      n=0;
  }
}

function win (num) {
  if (num === 1) {
    GameON = false;
    n=0;

    score.x++
    document.getElementById('x-wins').innerHTML = `X: ${score.x}`
  }

  else {
    GameON = false;
    n=0;

    score.o++
    document.getElementById('o-wins').innerHTML = `O: ${score.o}`
  }
}

function resetGame() {
    u = ['', '', ''];
    m = ['', '', ''];
    b = ['', '', ''];

  const data = ['u0', 'u1', 'u2', 'm0', 'm1', 'm2', 'b0', 'b1', 'b2']

    for (let i=0; i<data.length; i++) {
      const Button = `button-${data[i]}`
      document.querySelector(`.${Button}`)
        .innerHTML = ''
    }

    GameON = true;
    n=0;
    crossTurn = false;
}
// FUNCTIONS FUNCTIONS FUNCTIONS
// FUNCTIONS FUNCTIONS FUNCTIONS

//EVENTSLISTENERS
//EVENTSLISTENERS
  //Top Buttons
    document.querySelector(`.button-u0`)
      .addEventListener('click', () => playGame(u, 0, 'u'));

    document.querySelector('.button-u1')
      .addEventListener('click', () => playGame(u, 1, 'u'));

    document.querySelector('.button-u2')
      .addEventListener('click', () => playGame(u, 2, 'u'));
  //Middle Buttons
    document.querySelector('.button-m0')
      .addEventListener('click', () => playGame(m, 0, 'm'));

    document.querySelector('.button-m1')
      .addEventListener('click', () => playGame(m, 1, 'm'));

    document.querySelector('.button-m2')
      .addEventListener('click', () => playGame(m, 2, 'm'));
  //Bottom Buttons
    document.querySelector('.button-b0')
      .addEventListener('click', () => playGame(b, 0, 'b'));

    document.querySelector('.button-b1')
      .addEventListener('click', () => playGame(b, 1, 'b'));

    document.querySelector('.button-b2')
      .addEventListener('click', () => playGame(b, 2, 'b'));
    
  // OTHER BUTTONS
    document.querySelector('.reset')
    .addEventListener('click', () => resetGame());

    document.querySelector('.js-play-computer')
      .addEventListener('click', () => playComputer());

    document.querySelector('.js-play-friend')
      .addEventListener('click', () => playFriend());
//EVENTSLISTENERS
//EVENTSLISTENERS
