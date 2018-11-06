
var words = ["pumpkins", "outdoors", "autumn", "cider", "beer"];
var alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersGuessed = [];
var totalGuesses = 10;
var guessesLeft = 0;
var correctLetters = [];
var wins = 0;
var totalNumberWins = 0;
var losses = 0;
var blanks = 0;
var lettersInWord = [];
var blanksAndLetters = [];


function reset() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = selectedWord.split('');
    blanks = lettersInWord.length;

    letterGuessed = 0;
    guessesLeft = 10;
    lettersGuessed = [];
    correctLetters = [];
    totalNumberWins = 0;
    blanksAndLetters = [];
    alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    test = false;
    startGame();
}


function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = selectedWord.split(' ');
    blanks = lettersInWord.length;

    correctLetters = 0;
    totalNumberWins = 0;
    guessesLeft = 10;
    lettersGuessed = [];
    blanksAndLetters = [];
    alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (var i = 0; i < blanks; i++) {
        blanksAndLetters[i] = "_";
        document.querySelector("#guess-word").innerText = blanksAndLetters;
    }

    document.querySelector("#guess-word").innerText = blanksAndLetters.join(' ');
    document.querySelector("#guesses-left").innerText = guessesLeft;
    document.querySelector("#letters-guessed").innerText = lettersGuessed;
    document.querySelector("#total-losses").innerText = losses;

    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(blanks);
    console.log(blanksAndLetters);
}

function checkGuess(userKey) {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    if (selectedWord.indexOf(userKey) > -1) {
        for (var i = 0; i < blanks; i++) {
            if (lettersInWord[i] === userKey) {
                totalNumberWins++;
                blanksAndLetters[i] = userKey;

                document.querySelector("#guess-word").innerText = blanksAndLetters.join(' ');
            }
        }

        console.log(blanksAndLetters);
    }
    else {
        lettersGuessed.push(userKey);
        guessesLeft--;

        document.querySelector("#guesses-left").innerText = guessesLeft;
        document.querySelector("#letters-guessed").innerText = lettersGuessed;

        console.log("Letters guessed - " + lettersGuessed);
        console.log("Guesses left - " + guessesLeft);
    }

}


function winsLosses() {
    if (totalNumberWins === blanks) {
        wins++;

        document.querySelector("#wins-number").innerText = wins;
        reset();
    }
    else if (guessesLeft === 0) {
        losses++;

        document.querySelector("#total-losses").innerText = losses;
        reset();
    }
}


startGame();

document.onkeyup = function (event) {
    test = true;
    var letterGuessed = event.key;
    for (var i = 0; i < alphabetList.length; i++) {
        if (letterGuessed === alphabetList[i] && test === true) {
            var breakAlphabetList = alphabetList.splice(i, 1);

            console.log("spliced letter is " + breakAlphabetList);

            checkGuess(letterGuessed);
            winsLosses();
        }
    }
}


function myFunction() {
    location.reload();
}