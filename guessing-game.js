function guessingGame() {
  let rightNumber = Math.floor(Math.random() * 100);
  let gameOver = false;
  let numGuesses = 0;
  function makeGuess(guess) {
    numGuesses++;
    if (gameOver) {
      return "The game is over, you already won!";
    } else if (guess < rightNumber) {
      return `${guess} is too low!`;
    } else if (guess > rightNumber) {
      return `${guess} is too high!`;
    } else {
      gameOver = true;
      return `You win! The correct number is ${rightNumber} and you found it in ${numGuesses} guesses!`;
    }
  }
  return makeGuess;
}


module.exports = { guessingGame };
