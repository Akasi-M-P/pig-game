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

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

let playing = true;

player1Score.textContent = 0;
player2Score.textContent = 0;
diceOutcome.classList.add('hidden');

rollDice.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceOutcome.classList.remove('hidden');
    diceOutcome.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdDice.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceOutcome.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch Player
      switchPlayer();
    }
  }
});
