'use strict';
// console.log( document.querySelector('.message').textContent);
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage =function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = 'Not a number')
    );
  } else if (guess === number) {
    displayMessage('Winner');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number){
    if (score > 1) {
      displayMessage(guess > number ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Lost');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Lost';
  //   }
  // } else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Lost';
  //   }
  // }
});
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
