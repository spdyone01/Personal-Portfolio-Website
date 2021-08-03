/************************         Challenge Objectives        ******************************************************************
1. Convert "getStatusMessage" to a custom getter for "statusMessage"
2. Convert "getPuzzle" to a custom getter for "puzzle"
3. Change usage in app.js

********************************************************************************************************************************/
class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');    
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    checkGuess(guess) {
        guess = guess.toLowerCase();
        const isUnique = !this.guessedLetters.includes(guess);
        const isBadGuess = !this.word.includes(guess)

        if(isUnique){   // Checks to see if guess is unique.
            this.guessedLetters.push(guess);           // If unique then add to guessed letters.

            if(isBadGuess){
                this.remainingGuesses--           // If guess doesn't match letter in word then take away a point.
            }
        }
        this.checkStatus();
    }
    checkStatus() {
        // Failed Status
            if(this.remainingGuesses <= 0){
                this.status = 'failed';
            }
        // Finished Status
            else if(!this.puzzle.includes('*')){
                this.status = 'finished';
            }
    }
    get statusMessage() {
        if(this.status === 'playing') {
            return `Guesses Left: ${this.remainingGuesses}`
        }else if(this.status === 'failed'){
            return `Nice try! The word was "${this.word.join('')}"`
        }else{
            return 'Great work!  You finished the word!'
        }
    }
    get puzzle() {
        let puzzle = '';

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter;
            } else {
                puzzle += '*';
            }
        })

        return puzzle;
    }
}


// const Hangman = function (word, remainingGuesses) {
//     this.word = word.toLowerCase().split('');    
//     this.remainingGuesses = remainingGuesses;
//     this.guessedLetters = [];
//     this.status = 'playing';
// }

// Hangman.prototype.getPuzzle = function () {
//    let puzzle = '';

//     this.word.forEach((letter) => {
//         if (this.guessedLetters.includes(letter) || letter === ' ') {
//             puzzle += letter;
//         } else {
//             puzzle += '*';
//         }
//     })

//    return puzzle;
// }

// Hangman.prototype.checkGuess = function (guess) {
//         guess = guess.toLowerCase();
//         const isUnique = !this.guessedLetters.includes(guess);
//         const isBadGuess = !this.word.includes(guess)

//         if(isUnique){   // Checks to see if guess is unique.
//             this.guessedLetters.push(guess);           // If unique then add to guessed letters.

//             if(isBadGuess){
//                 this.remainingGuesses--           // If guess doesn't match letter in word then take away a point.
//             }
//         }
//         this.checkStatus();
// }

// Hangman.prototype.checkStatus = function () {

//     // Failed Status
//         if(this.remainingGuesses <= 0){
//             this.status = 'failed';
//             console.log('failed in checkStatus')
//             console.log(this.status)
//         }
//     // Finished Status
//         else if(!this.getPuzzle().includes('*')){
//             this.status = 'finished';
//             console.log('this should be finished')
//             console.log(this.status)
//         }
// }

// Hangman.prototype.statusMessage = function () {
//     if(this.status === 'playing') {
//         return `Guesses Left: ${this.remainingGuesses}`
//     }else if(this.status === 'failed'){
//         return `Nice try! The word was "${this.word.join('')}"`
//     }else{
//         return 'Great work!  You finished the word!'
//     }
// }
