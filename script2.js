console.log('------Right Guess Function------');
// const rightGuess = function () {
//     displayMessage.textContent = 'You guessed correctly!';
//     newGame.textContent = 'Start New Game!'
//     sectionElement.style.backgroundColor = '#577de6';
//     displayMessage.style.backgroundColor = '#ed8282';
//     newGame.style.backgroundColor = '#ed8282';
// }



console.log('------Wrong Guess Function------');
// const wrongGuess = function () {
//     displayMessage.style.backgroundColor = '#ed8282';
//     newGame.textContent = 'Start New Game?!';
//     newGame.style.backgroundColor = '#ed8282';

//     if (attempts > 1) {
//         attempts--;
//         guessRemaining.textContent = attempts;
//         guessElement.value = '';

//     } else {
//         displayMessage.textContent = `Game Over! Number was ${secretNumber}`;
//         newGame.textContent = 'Start New Game?!';
//         guessRemaining.textContent = 0;
//         submitButton.disabled = true;
//         guessElement.disabled = true;
//         displayMessage.style.backgroundColor = '#ed8282';
//         newGame.style.backgroundColor = '#ed8282';
//         guessElement.value = '';
//     }
// }



console.log('------Response Message Function------');
// const responseMessage = function (response) {
//     displayMessage.textContent = response;
// }



console.log('------Run Game Function------');
// const runGame = function () {
//     const guess = Number(guessElement.value);

//     if (guess > 0) {
//         // Guess is less than zero
//         previousGuess = guess;
//         myPreviousGuess.push(previousGuess);
//         guessPrevious.textContent = myPreviousGuess.join(' ');
//     }

//     if (!guess) {
//         // User does not input any guess
//         alert('Enter a valid number!');

//     } else if (guess < 1) {
//         // If guess < 1
//         alert('Enter number greater than 1');

//     } else if (guess === secretNumber) {
//         // Guess is equal to secret number
//         displayMessage.textContent = 'You guessed correctly!';
//         newGame.textContent = 'Start New Game!'
//         submitButton.disabled = true;
//         guessElement.disabled = true;
//         sectionElement.style.backgroundColor = '#577de6';
//         displayMessage.style.backgroundColor = '#ed8282';
//         newGame.style.backgroundColor = '#ed8282';

//     } else if (guess < secretNumber) {
//         // Guess not equal to secret number
//         displayMessage.textContent = 'Too Low, Try Again!!'
//         newGame.textContent = 'Start New Game?!';
//         displayMessage.style.backgroundColor = '#ed8282';
//         newGame.style.backgroundColor = '#ed8282';

//         if (attempts > 1) {
//             attempts--;
//             guessRemaining.textContent = attempts;
//             guessElement.value = '';

//         } else {
//             displayMessage.textContent = `Game Over! Number was ${secretNumber}!`;
//             newGame.textContent = 'Start New Game?!';
//             guessRemaining.textContent = 0;
//             submitButton.disabled = true;
//             guessElement.disabled = true;
//             displayMessage.style.backgroundColor = '#ed8282';
//             newGame.style.backgroundColor = '#ed8282';
//             guessElement.value = '';
//         }

//     } else if (guess > secretNumber) {
//         // Guess not equal to secret number
//         displayMessage.textContent = 'Too High, Try Again!!'
//         newGame.textContent = 'Start New Game?!';
//         displayMessage.style.backgroundColor = '#ed8282';
//         newGame.style.backgroundColor = '#ed8282';

//         if (attempts > 1) {
//             attempts--;
//             guessRemaining.textContent = attempts;
//             guessElement.value = '';

//         } else {
//             displayMessage.textContent = `Game Over! Number was ${secretNumber}!`;
//             newGame.textContent = 'Start New Game?!';
//             guessRemaining.textContent = 0;
//             submitButton.disabled = true;
//             guessElement.disabled = true;
//             displayMessage.style.backgroundColor = '#ed8282';
//             newGame.style.backgroundColor = '#ed8282';
//             guessElement.value = '';
//         }
//     }
// }

style.display = 'none'