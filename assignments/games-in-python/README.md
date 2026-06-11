# 📘 Assignment: Hangman Game

## 🎯 Objective

Build a classic Hangman game using Python strings, loops, conditionals, and user input.

## 📝 Tasks

### 🛠️ Word Selection and Setup

#### Description
Randomly choose a secret word from a predefined list and prepare variables to track guessed letters and remaining attempts.

#### Requirements
Completed program should:

- Use a list of possible words in the starter code
- Randomly select one word as the secret word
- Initialize game state variables for guessed letters and incorrect guesses
- Define a maximum number of incorrect attempts

### 🛠️ Game Loop and Progress Display

#### Description
Create the main game loop that accepts letter guesses, updates the display, and checks win/lose conditions.

#### Requirements
Completed program should:

- Prompt the player to guess a letter each turn
- Display the current word progress using underscores for unguessed letters
- Track and display incorrect guesses remaining
- End the game when the player guesses the word or uses all attempts

### 🛠️ Win/Lose Result

#### Description
Show a final message that tells the player whether they won or lost and reveals the secret word when the game ends.

#### Requirements
Completed program should:

- Print a win message if the secret word is guessed
- Print a lose message if the player runs out of attempts
- Reveal the secret word when the game is over
