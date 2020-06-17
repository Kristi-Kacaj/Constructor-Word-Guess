let Word = require("./word.js");
let inquirer = require("inquirer");

//Letter entry
let letterArray = "abcdefghijklmnopqrstuvwxyz";

//List of words to choose from
let wordBank = [
    "earth",
    "mercury",
    "venus",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto",
];

//Selects a random index from the wordBank array
let randomIndex = Math.floor(Math.random() * wordBank.length);
let randomWord = wordBank[randomIndex];
let compWord = new Word(randomWord);
let requireNewWord = false;
//Array for guessed letters
let incorrectLetters = [];
let correctLetters = [];
let guessesLeft = 10;

function Logic() {
    //Generates the new word from the word constructor
    if (requireNewWord) {
        //Selects a random word from the wordBank array
        let randomIndex = Math.floor(Math.random() * wordBank.length);
        let randomWord = wordBank[randomIndex];
        
        compWord = new Word(randomWord);
        requireNewWord = false
    };

    //Checks if the users letter guess is correct
    let completeWord = [];
    compWord.objectArray.forEach(completeCheck);

    if (completeWord.includes(false)) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter:",
                    name: "userinput"
                }
            ]).then(function(input) {
                if (
                    !letterArray.includes(input.userinput) ||
                    input.userinput.length > 1
                ) {
                    console.log("\nPlease try again!\n");
                    Logic();
                } else {
                    //If statement handles the guesses
                    if (
                        incorrectLetters.includes(input.userinput) ||
                        correctLetters.includes(input.userinput) ||
                        input.userinput === ""
                    ) {
                        console.log("\nAlready Guessed or Nothing Entered\n");
                        Logic();
                    //Checks if the word is guessed correctly
                    } else {
                        let wordCheckArray = [];
                        compWord.userGuess(input.userinput);
                        
                        compWord.objectArray.forEach(wordCheck);
                        if (wordCheckArray.join("") === completeWord.join("")) {
                            console.log("\nIncorrect\n");

                            incorrectLetters.push(input.userinput);
                            guessesLeft--;
                        } else {
                            console.log("\nCorrect\n");
                            correctLetters.push(input.userinput);
                        };
                    };
                };
            });
    };
};