'use strict';

// Selecting Elements
const submitButton = document.querySelector('.submit');
const displayMessage = document.querySelector('.message');
const newGame = document.querySelector('.new-game');
const guessRemaining = document.querySelector('.remaining');
const guessPrevious = document.querySelector('.previous');
const guessElement = document.querySelector('.guess');
const sectionElement = document.querySelector('.section');

// Starting Conditons
const secretNumber = Math.trunc(Math.random() * 10 + 1);
let attempts, previousGuess, myPreviousGuess;


const init = function () {
    // Restarting Game Conditions
    attempts = 10;
    previousGuess = 0;
    myPreviousGuess = [];
    guessRemaining.textContent = 10;
    displayMessage.classList.add('hidden');
    newGame.classList.add('hidden');
    guessPrevious.textContent = '';
    submitButton.disabled = false;
    guessElement.disabled = false;
    guessElement.value = '';
}
init();


const responseMessage = function (response) {
    // Displays response message
    displayMessage.textContent = response;
}

const runGame = function () {
    // Gane starts
    const guess = Number(guessElement.value);

    if (guess > 0) {
        // Guess is less than zero
        previousGuess = guess;
        myPreviousGuess.push(previousGuess);
        guessPrevious.textContent = myPreviousGuess.join(' ');
    }

    if (!guess) {
        // User does not input any guess
        alert('Enter a valid number!');

    } else if (guess < 1) {
        // If guess < 1
        alert('Enter number greater than 0');
        guessElement.value = '';

    } else if (guess === secretNumber) {
        // Guess is equal to secret number
        displayMessage.classList.remove('hidden');
        newGame.classList.remove('hidden');
        displayMessage.textContent = 'You guessed correctly!';
        newGame.textContent = 'Start New Game!'
        guessElement.value = '';
        submitButton.disabled = true;
        guessElement.disabled = true;
        sectionElement.style.backgroundColor = '#577de6';
        displayMessage.style.backgroundColor = '#ed8282';
        newGame.style.backgroundColor = '#ed8282';
        displayMessage.style.borderRadius = '0.5rem';
        newGame.style.borderRadius = '0.5rem';

    } else if (guess !== secretNumber) {
        displayMessage.classList.remove('hidden');
        newGame.classList.remove('hidden');
        responseMessage(guess < secretNumber ? 'Too Low, Try Again!!' : 'Too High, Try Again!!');
        newGame.textContent = 'Start New Game?!';
        displayMessage.style.backgroundColor = '#ed8282';
        newGame.style.backgroundColor = '#ed8282';
        displayMessage.style.borderRadius = '0.5rem';
        newGame.style.borderRadius = '0.5rem';

        if (attempts > 1) {
            // If attempt is greater than 1
            attempts--;
            guessRemaining.textContent = attempts;
            guessElement.value = '';

        } else {
            // Attempt is less than 1
            displayMessage.textContent = `Game Over! Number was ${secretNumber}!`;
            newGame.textContent = 'Start New Game?!';
            guessRemaining.textContent = 0;
            submitButton.disabled = true;
            guessElement.disabled = true;
            displayMessage.style.backgroundColor = '#ed8282';
            newGame.style.backgroundColor = '#ed8282';
            guessElement.value = '';
        }
    }
};



submitButton.addEventListener('click', function () {
    // Click submit button?
    runGame();
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // Click enter on keyboard?
        runGame();
    }
})

newGame.addEventListener('click', init);




