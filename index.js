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
    "saturn"
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
    if (requireNewWord) {
        //Selects a random word from the wordBank array
        let randomIndex = Math.floor(Math.random() * wordBank.length);
        let randomWord = wordBank[randomIndex];
        
        compWord = new Word(randomWord);
        requireNewWord = false
    };
}