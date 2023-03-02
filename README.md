# Speak Number Guess 🔢🎤

Speak Number Guess is a simple web-based game that allows the user to guess a randomly generated number between 1 and 100 by speaking their guess aloud 🗣️. The game uses the Web Speech API to convert the user's speech into text and validate their guess .

### Live Demo

Check out the [live demo] 👉 https://sarawhdan.github.io/Speak-Number-Guess-Game/ of this project hosted on GitHub Pages.

## Screenshot ![Screenshot (155)](https://user-images.githubusercontent.com/109487290/222561319-13553c08-09f3-464b-9dfe-d12d5c035549.png)



## How to Play 🎮

1. Allow the browser to access your microphone 🎤.
2. The game will generate a random number between 1 and 100 🔢.
3. Speak your guess into the microphone 🗣️.
4. The game will validate your guess and provide feedback (go higher, go lower, invalid number, etc.) 🧐.
5. Keep guessing until you correctly guess the randomly generated number 🤞.
6. After successfully guessing the number, the game will display a congratulatory message with the number of attempts and offer the option to play again 🎉.

## Project Structure 📂

- `index.html` - The HTML file that contains the structure of the game page.
- `style.css` - The CSS file that contains the styling of the game page.
- `script.js` - The JavaScript file that contains the logic of the game.

## How It Works 🔧

1. The game generates a random number between 1 and 100 using the `generateRandomNumber` function.
2. The game creates a `webkitSpeechRecognition` object and starts listening to the user's speech using the `start` method.
3. The game uses the `onSpeak` function to convert the user's speech into text using the Web Speech API and validate their guess using the `validateMsg` function.
4. The `validateMsg` function checks if the user's input is a valid number, between 1 and 100, or if it's higher or lower than the generated number.
5. If the user correctly guesses the number, the game displays a congratulatory message with the number of attempts and an option to play again.
6. If the user does not correctly guess the number, the game provides feedback and prompts the user to guess again.
7. The game restarts the `webkitSpeechRecognition` object after it has ended using the `end` event listener.

## Technologies Used 🛠️

- HTML
- CSS
- JavaScript
- Web Speech API

