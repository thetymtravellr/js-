'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Refactoring The Code

// Display Message

const displayMessage = message =>
  (document.querySelector('.message').textContent = message);

// Display Score

const displayScore = score =>
  (document.querySelector('.score').textContent = score);

// Display Number

const displayNumber = number =>
  (document.querySelector('.number').textContent = number);

// Display Number Width

const displayNumberWidth = numberWidth =>
  (document.querySelector('.number').style.width = numberWidth);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   When There Is No Input
  if (!guess) {
    displayMessage('No Number!');
  }

  //   When Player Wins
  else if (guess === secretNumber) {
    displayMessage('🏆 Congrates!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayNumberWidth('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //   When The Number Is Different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You Lost The Game');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  displayScore(score);
  displayNumberWidth('15rem');
  document.querySelector('.guess').value = '';
});