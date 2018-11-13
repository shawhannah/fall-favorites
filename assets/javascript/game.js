
var words = ["pumpkins", "outdoors", "autumn", "cider", "beer"];
var alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersGuessed = [];
var totalGuesses = 10;
var guessesLeft = 0;
var correctLetters = [];
var blanks = 0;
var lettersInWord = [];
var blanksAndLetters = [];
var song = new Audio("song.mp3"); //could not find a safe website to download MP3
//this was the last thing i had an issue with and wanted to go ahead and turn in(attempted audio code below)


function reset() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = selectedWord.split('');
    blanks = lettersInWord.length;

    letterGuessed = 0;
    guessesLeft = 10;
    lettersGuessed = [];
    correctLetters = [];
    blanksAndLetters = [];
    alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    startGame();
}


function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    lettersInWord = selectedWord.split('');
    blanks = lettersInWord.length;

    correctLetters = 0;
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

    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(blanks);
    console.log(blanksAndLetters);
}

function checkGuess(userKey) {
    if (selectedWord.indexOf(userKey) > -1) {
        for (var i = 0; i < blanks; i++) {
            if (lettersInWord[i] === userKey) {

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

        if (guessesLeft === 0) {
            alert("You lose! Click the button to try again!");
            song.play();


        }
    }

}


startGame();

document.onkeyup = function (event) {
    var letterGuessed = event.key;
    for (var i = 0; i < alphabetList.length; i++) {
        if (letterGuessed === alphabetList[i]) {
            var breakAlphabetList = alphabetList.splice(i, 1);

            console.log("spliced letter is " + breakAlphabetList);

            checkGuess(letterGuessed);
        }
    }
}


function myFunction() {
    location.reload();
}