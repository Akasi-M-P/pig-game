// Variables for player elements and scores
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const player1CurrentScore = document.getElementById('current--0');
const player2CurrentScore = document.getElementById('current--1');

// Variable for dice element
const diceOutcome = document.querySelector('.dice');

// Buttons for controlling the game
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');

// Game variables
let scores, currentScore, activePlayer, playing;

// Function to initialize the game state
const init = () => {
  // Initialize scores, currentScore, and activePlayer
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // Reset the displayed scores and current scores on the UI
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;

  // Hide the dice image
  diceOutcome.classList.add('hidden');

  // Remove winner and active classes from players, and add active class to player 1
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};

// Call the init function to initialize the game state
init();

// Function to switch the active player
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

// Event listener for the "Roll Dice" button
rollDice.addEventListener('click', function () {
  if (playing) {
    // Generate a random dice number between 1 and 6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Show the dice image corresponding to the dice number
    diceOutcome.classList.remove('hidden');
    diceOutcome.src = `dice-${dice}.png`;

    if (dice !== 1) {
      // If the dice number is not 1, add the dice number to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // If the dice number is 1, switch to the next player
      switchPlayer();
    }
  }
});

// Event listener for the "Hold" button
holdDice.addEventListener('click', function () {
  if (playing) {
    // Add the current score to the active player's total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // If the active player's total score is 100 or more, they win
      playing = false;
      diceOutcome.classList.add('hidden');

      // Add the 'player--winner' class to the winner's UI element
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      // Remove the 'player--active' class from the winner's UI element
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // If no player has won yet, switch to the next player
      switchPlayer();
    }
  }
});

// Event listener for the "New Game" button
newGame.addEventListener('click', init);
