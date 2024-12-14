// terminal game
const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(field) {
    this.field = field;
    this.vertical = field.length;
    this.horizontal = field[0].length;
    this.initialVerticalPosition = 0;
    this.initialHorizontalPosition = 0;
  }

  static generateField(height, width, holePercentage = 0.2) {
    // Create an empty field filled with fieldCharacter
    const field = new Array(height).fill(null).map(() =>
      new Array(width).fill(fieldCharacter)
    );

    // Place the hat in a random position
    const hatRow = Math.floor(Math.random() * height);
    const hatCol = Math.floor(Math.random() * width);
    field[hatRow][hatCol] = hat;

    // Place holes based on the holePercentage
    const totalCells = height * width;
    const totalHoles = Math.floor(totalCells * holePercentage);

    let holesPlaced = 0;
    while (holesPlaced < totalHoles) {
      const holeRow = Math.floor(Math.random() * height);
      const holeCol = Math.floor(Math.random() * width);

      // Avoid placing a hole on the starting position or hat
      if (field[holeRow][holeCol] === fieldCharacter) {
        field[holeRow][holeCol] = hole;
        holesPlaced++;
      }
    }

    // Ensure the starting position is marked
    field[0][0] = pathCharacter;

    return field;
  }

  // Print the field to the console
  print() {
    console.log(this.field.map((row) => row.join(" ")).join("\n"));
  }

  // Handle user movement
  movement() {
    const movementCommand = prompt("Which direction do you want to go (l/r/u/d): ").toLowerCase();

    switch (movementCommand) {
      case "l":
        this.initialHorizontalPosition -= 1;
        break;
      case "r":
        this.initialHorizontalPosition += 1;
        break;
      case "u":
        this.initialVerticalPosition -= 1;
        break;
      case "d":
        this.initialVerticalPosition += 1;
        break;
      default:
        console.log("Invalid input! Please enter l, r, u, or d.");
    }
  }

  // Check edge cases for win/loss conditions
  edgecase() {
    // Check if the player moves out of bounds
    if (
      this.initialHorizontalPosition < 0 ||
      this.initialHorizontalPosition >= this.horizontal ||
      this.initialVerticalPosition < 0 ||
      this.initialVerticalPosition >= this.vertical
    ) {
      console.log("You fell off the field, you lose!");
      return false; // End the game
    }

    const currentPosition =
      this.field[this.initialVerticalPosition][this.initialHorizontalPosition];

    if (currentPosition === hat) {
      console.log("You found the hat! You win!");
      return false; // End the game
    } else if (currentPosition === hole) {
      console.log("You fell in a hole, you lose!");
      return false; // End the game
    }

    // Mark the current position with *
    this.field[this.initialVerticalPosition][this.initialHorizontalPosition] = pathCharacter;
    return true; // Continue the game
  }

  // Main game loop
  game() {
    let playing = true;

    while (playing) {
      this.print(); // Show the field
      this.movement(); // Move the player
      playing = this.edgecase(); // Check for win/lose conditions
    }
  }
}

// Example usage
const height = 5;
const width = 5;
const holePercentage = 0.3;

// Generate a random field
const randomField = Field.generateField(height, width, holePercentage);

// Create a Field instance and play the game
const myField = new Field(randomField);
myField.game();
