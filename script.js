const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const player1CurrentScore = document.getElementById('current--0');
const player2CurrentScore = document.getElementById('current--1');

const diceOutcome = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

player1Score.textContent = 0;
player2Score.textContent = 0;
diceOutcome.classList.add('hidden');

rollDice.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceOutcome.classList.remove('hidden');
  diceOutcome.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
});

