const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;
    } else {
      return null;
    }
  };

  const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  const determineWinner = (userInput, computerChoice) => {
    if (userInput === 'bomb') {
      return "You won with a secret weapon!";
    }

    if (userInput === computerChoice) {
      return "It's a tie!";
    }

    if (userInput === "rock") {
      if (computerChoice === "paper") {
        return "Computer won!";
      } else {
        return "You won!";
      }
    }

    if (userInput === "paper") {
      if (computerChoice === "scissors") {
        return "Computer won!";
      } else {
        return "You won!";
      }
    }

    if (userInput === "scissors") {
      if (computerChoice === "rock") {
        return "Computer won!";
      } else {
        return "You won!";
      }
    }
  };

  const playGame = (userInput) => {
    const userChoice = getUserChoice(userInput);
    if (!userChoice) {
      document.getElementById("result").innerText = "Please choose a valid option!";
      return;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    document.getElementById("result").innerHTML = `
      You chose: <strong>${userChoice}</strong><br>
      Computer chose: <strong>${computerChoice}</strong><br>
      Result: <strong>${result}</strong>
    `;
  };