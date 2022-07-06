'use strict';

// !!!!This part is for basic understanding only!!!!
/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '⭐ Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1; //For generating Random Number

let score = 20; //Initializing the score

let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value); //This will log the value to the console on click
    console.log(guess);

    //When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '🚫 No Number'; //When no number is entered
        displayMessage('🚫 No Number');
    }
    //When Player Wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent =
            '🎉 Correct Number Guessed!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber; //For displaying Random Number

        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
        }
    }
    //When the Player Loses i.e. Wrong Guess
    else if (guess !== secretNumber) {
        if (score > 1) {
            //To make sure that score value dont go on decrementing until it enters -ve value
            document.querySelector('.message').textContent =
                guess > secretNumber
                    ? '📈 Guess is too High'
                    : '📉 Guess is too Low';
            score--; //Decrementing the score on wrong guess
            document.querySelector('.score').textContent = score; //Displaying the score
        } else {
            document.querySelector('.message').textContent =
                'You Lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
    /*    //When the guess is too high
    else if (guess > secretNumber) {
        if (score > 1) {
            //To make sure that score value dont go on decrementing until it enters -ve value
            document.querySelector('.message').textContent =
                '📈 Guess is too High';
            score--; //Decrementing the score on wrong guess
            document.querySelector('.score').textContent = score; //Displaying the score
        } else {
            document.querySelector('.message').textContent =
                'You Lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
    //When the guess is too low
    else if (guess < secretNumber) {
        if (score > 1) {
            //To make sure that score value dont go on decrementing until it enters -ve value
            document.querySelector('.message').textContent =
                '📉 Guess is too Low';
            score--; //Decrementing the score on wrong guess
            document.querySelector('.score').textContent = score; //Displaying the score
        } else {
            document.querySelector('.message').textContent =
                'You Lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    } */
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // document.querySelector('.message').textContent = '🙇‍♂️ Start Guessing';
    displayMessage('🙇‍♂️ Start Guessing...');
    secretNumber = Math.trunc(Math.random() * 20) + 1; //For generating Random Number
    document.querySelector('.number').textContent = '?';
    guess = document.querySelector('.guess').value = '';
});
