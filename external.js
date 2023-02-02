//Begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
//Math.floor(Math.random()*(1 + myArray.length - 1));
//let value = myArray[Math.floor(Math.random() * myArray.length)];

let choices = ['Rock', 'Paper', 'Scissors'];
let getComputerChoice = choices[Math.floor(Math.random() * choices.length)];
console.log (getComputerChoice);

//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection - 
//and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

function playRound (playerSelection, computerSelection) {
    if (computerSelection == 'Paper') {
        return "You lose! Paper beats Rock";
    } else if (computerSelection == 'Scissors') {
        return "You win! Rock beats Scissors";
    } else { return "Tie!";}
        }
const playerSelection = "Rock"; 
const computerSelection = getComputerChoice;
console.log (playRound(playerSelection, computerSelection));

//Make your function’s playerSelection parameter case-insensitive (so users can input 
//rock, ROCK, RocK or any other variation).