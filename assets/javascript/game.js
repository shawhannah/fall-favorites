
var words = ["pumpkins", "outdoors", "autumn", "cider", "beer"];
var alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guess = [];
var lettersGuessed = [];
var totalGuesses = 10;
var guessesLeft = 0;
var correctLetters = [];
var blanks = 0;
var lettersInWord = [];
var blanksAndLetters = [];


function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = selectedWord.split(' ');
    blanks = lettersInWord.length;

    correctLetters = 0;
    guessesLeft = 10;
    lettersGuessed = [];
    blanksAndLetters = [];
    alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (var i = 0; i < blanks; i++) {
        blanksAndLetters[i] = "_";
        document.querySelector("#guessWord").innerText = blanksAndLetters;
    }

    document.querySelector("#guessWord").innerText = blanksAndLetters.join(' ');
    document.querySelector("#guesses-left").innerText = guessesLeft;
    document.querySelector('#letters-guessed').innerText = lettersGuessed;

    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(blanks);
    console.log(blanksAndLetters);
}

function findGuess(letter) {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    for (var i = 0; i < selectedWord.length; i++) {
        var wordLetter = selectedWord[i];
        if (wordLetter === letter) {
            blanks[i] === letter;
        }
    }
}

function checkGuess(guess) {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    if (selectedWord.indexOf(guess) > -1) {
        if (lettersInWord[i] === guess) {
            correctLetters++;
            blanksAndLetters[i] = guess;

            document.querySelector("#guessWord").innerText = blanksAndLetters.join(' ');
        }
        else {
            lettersGuessed.push(guess);
            guessesLeft--;

            document.querySelector("#guesses-left").innerText = guessesLeft;
            document.querySelector("#letters-guessed").innerText = lettersGuessed;

            console.log("Letters guessed - " + lettersGuessed);
            console.log("Guesses left - " + guessesLeft);
        }
    }
}

startGame();

document.onkeyup = function (event) {
    guess = event.key;
    findGuess(guess);
};

function reset(){
    selectedWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = selectedWord.split('');     
    blanks = lettersInWord.length;

    letterGuessed = 0;
    guessesLeft = 10;
    lettersGuessed = [];
    blanksAndLetters = [];
    alphabetList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    test=false;
    startGame();
}
