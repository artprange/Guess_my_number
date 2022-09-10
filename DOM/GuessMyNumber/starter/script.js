'use strict';

//Setting the random number generator: We use trunc to eliminate decimals, and the +1 to make the count go up to 20, otherwise it would go until 19 but not 20


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // ---NO INPUT---
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('Please, insert a number fom 1 to 20');

    // --- PLAYER WINS ---
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // -- NUMBER WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? 'Too high!' : Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //Refactoring! This makes the code cleaner, thus, making it easier in case of an alteration in the future.
  // --- NUMBER TOO HIGH---
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       score--; //or score -1
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       // ---PLAYER LOOSES---
  //       document.querySelector('.message').textContent = 'You lost the Game!';
  //       document.querySelector('.message').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       // --- NUMBER TOO LOW ---
  //       document.querySelector('.message').textContent = 'Too low!';
  //       score--; //or score -1
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       // --- PLAYER LOOSES ---
  //       document.querySelector('.message').textContent = 'You lost the Game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

// Challenge - set the "again button" BUT, the high score wont show, so I had to do the long way around :(
document.querySelector('.again').addEventListener('click', function () {
  location.reload(true);
});

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';

//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
