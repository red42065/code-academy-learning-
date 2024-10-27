let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  let humanDifference = Math.abs(humanGuess - secretNumber);
  let computerDifference = Math.abs(computerGuess - secretNumber);

  if (humanDifference < computerDifference) {
    return true; // Human wins
  } else if (humanDifference > computerDifference) {
    return false; // Computer wins
  } else {
    return true; // Tie, human wins by default
  }
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
};

const advanceRound = () => {
  return (currentRoundNumber += 1);
};
