
// //Create Variables

// const playerSelection = document.querySelectorAll('input').forEach(item => {
//     item.addEventListener('click', function() {
    
//     }); This is just another shorter way I could've added an event listener to all buttons for 'click'
   
//   });

const playerSelection = document.querySelectorAll('button').length;
for (let i = 0; i < playerSelection; i++){
    document.querySelectorAll('button')[i].addEventListener('click', function buttonClicked() {  //when a button on the HTML page is clicked, buttonClicked function will be initiated and this if,else function will activate running a result based on the playerSelection - button clicked.
        
        let choices = ['rock', 'paper', 'scissors'];
        let getComputerChoice = choices[Math.floor(Math.random() * choices.length)]; //This randomizes computers choice

        const playerChoice = this.value; //Users selection based on button pressed

        const computerChoice = document.querySelector('.computerSelection'); //Select the div computerSelect and turns it into a variable
        computerChoice.innerText = getComputerChoice[0].toUpperCase()+getComputerChoice.slice(1, getComputerChoice.length).toLowerCase(); //Displays computer's choice on the webpage. Since I had written rock,paper,scissors all in lower case, this code will display Rock, Paper, Scissors on the webpage with a capital first letter.

        const resultMessage = document.querySelector('.results'); //This should select the results div
        

        if (playerChoice === getComputerChoice) {
        resultMessage.innerText = "You are a worthy opponent! It's a tie!"; //This should return the first string in the results array which is 'tie'.
        } else if (playerChoice === 'scissors' && getComputerChoice === 'paper'){
        resultMessage.innerText = "I've been defeated! You win!"; //Same, returns th.slice( )econd string 'winner'
        } else if (playerChoice === 'scissors' && getComputerChoice === 'rock'){
            resultMessage.innerText = "Ha! Better luck next time! You lose!"; //'loser'
        }else if (playerChoice === 'paper' && getComputerChoice === 'rock'){
            resultMessage.innerText = "I've been defeated! You win!"; //Note to self - if this does not return the proper string, try array.slice(startIndex, endIndex)
        } else if (playerChoice === 'paper' && getComputerChoice === 'scissors'){
            resultMessage.innerText = "Ha! Better luck next time! You lose!";
        }else if (playerChoice === 'rock' && getComputerChoice === 'scissors'){
            resultMessage.innerText = "I've been defeated! You win!";
        } else if (playerChoice === 'rock' && getComputerChoice === 'paper'){
            resultMessage.innerText = "Ha! Better luck next time! You lose!";
        } else 
            resultMessage.innerText = "Invalid Entry" //Probably don't need this. In case user somehow inputs a response other than rock, paper, scissors.
    });
};

// };//This should add an onClick feature to each button and trigger the function buttonClicked


//let playerSelection = this.value;

//playerSelection doesn't have a value so the result .value is always "Invalid Entry". AHHHH
//How to I make playerSelection = to the value of the button that is clicked whenver the user plays?


// function buttonClicked(playerSelection, getComputerChoice){ //when a button on the HTML page is clicked, buttonClicked function will be initiated and this if,else function will activate running a result based on the playerSelection - button clicked.
    
//     if (playerSelection.value === getComputerChoice) {
//     resultMessage.innerText = "You are a worthy opponent! It's a tie!"; //This should return the first string in the results array which is 'tie'.
//     } else if (playerSelection.value === 'scissors' && getComputerChoice === 'paper'){
//     resultMessage.innerText = "I've been defeated! You win!"; //Same, returns th.slice( )econd string 'winner'
//     } else if (playerSelection.value === 'scissors' && getComputerChoice === 'rock'){
//         resultMessage.innerText = "Ha! Better luck next time! You lose!"; //'loser'
//     }else if (playerSelection.value === 'paper' && getComputerChoice === 'rock'){
//         resultMessage.innerText = "I've been defeated! You win!"; //Note to self - if this does not return the proper string, try array.slice(startIndex, endIndex)
//     } else if (playerSelection.value === 'paper' && getComputerChoice === 'scissors'){
//         resultMessage.innerText = "Ha! Better luck next time! You lose!";
//     }else if (playerSelection.value === 'rock' && getComputerChoice === 'scissors'){
//         resultMessage.innerText = "I've been defeated! You win!";
//     } else if (playerSelection.value === 'rock' && getComputerChoice === 'paper'){
//         resultMessage.innerText = "Ha! Better luck next time! You lose!";
//     } else 
//         resultMessage.innerText = "Invalid Entry" //Probably don't need this. In case user somehow inputs a response other than rock, paper, scissors.
//     };



//resultMessage.innerText = resultsArray[buttonClicked()]; //This should turn the 'results' array into strings to be displayed on the webpage one at a time depending on the result of buttonClicked function. 

//Note - this is returning undefined - Maybe will have to use the slice the resultsArray inside the function instead.
//Maybe I'm not calling the buttonClicked function properly with the [] in the innerText
// resultsArray is showing up on the webpage as "[object HTMLLIElement]"instead of the actual text inside the nodelist - how to fix this?

//Buttons are still not working!!! WTF!! - fixed!

//<--plan B
//Try rewritting the array into the JS file and delete the ul and li on the HTML page. Turn the ul into a <div> id=results. Then create a selector on the JS file to select div> results. Follow the video to create an array
//Try redoing the buttonClicked function to have the return = aportion of the array?













// });
//in the forEach function - put in the playRound function
//change up or remove the userInput feature since we won't be using Prompt
//change the userInput back to playerSelection
// Will the return of results show up on the webpage or just the console
//Maybe turn the win, lose results into an array written in JS and use the function to run through the array according to the if else conditions?



















// 
//     console.log (getComputerChoice);
    





//console.log (playRound(playerSelection, computerSelection));

//<---Below function is trying to create 5 automatic rounds that will keep score. With a total score 5/5 - winner or loser
// function game(){ 
    
//     return playRound(playerSelection, computerSelection);
// }

// for (let i = 1; i < 6; i++) {
//     alert (`Round ${i}`);
//     console.log (getComputerChoice);
//     console.log (playerSelection);
//     console.log (game());

//<---Some Math.random functions notes
//Math.floor(Math.random()*(1 + myArray.length - 1));
//let value = myArray[Math.floor(Math.random() * myArray.length)];

//let userInput = playerSelection[0].toUpperCase()+playerSelection.slice(1, playerSelection.length).toLowerCase();

// function playRound (playerSelection, computerSelection) {
//     let userInput = playerSelection.toLowerCase();
//     if (userInput === computerSelection) {
//     return "Tie!"
//     } else if (userInput === 'scissors' && computerSelection === 'paper'){
//     return "You Win!"
//     } else if (userInput === 'scissors' && computerSelection === 'rock'){
//         return "You Lose!"
//     }else if (userInput === 'paper' && computerSelection === 'rock'){
//         return "You Win!"
//     } else if (userInput === 'paper' && computerSelection === 'scissors'){
//         return "You Lose!"
//     }else if (userInput === 'rock' && computerSelection === 'scissors'){
//         return "You Win!"
//     } else if (userInput === 'rock' && computerSelection === 'paper'){
//         return "You Lose!"
//     } else {
//         return "Invalid Entry"
//     }
// }


//Draft

// let results = document.querySelectorAll('li'); //This should select all li
// let resultsArray = Array.from(results); //This should turn all the li nodeList into an array
// // //Create the function

// function buttonClicked(playerSelection){ //when a button on the HTML page is clicked, buttonClicked function will be initiated and this if,else function will activate running a result based on the playerSelection - button clicked.
//     //let userInput = playerSelection;
//     if (playerSelection === getComputerChoice) {
//     return resultsArray.slice(0, 1); //This should return the first string in the results array which is 'tie'.
//     } else if (playerSelection === 'scissors' && getComputerChoice === 'paper'){
//     return resultsArray.slice(1, 2); //Same, returns th.slice( )econd string 'winner'
//     } else if (playerSelection === 'scissors' && getComputerChoice === 'rock'){
//         return resultsArray.pop(); //'loser'
//     }else if (playerSelection === 'paper' && getComputerChoice === 'rock'){
//         return resultsArray.slice(1, 2); //Note to self - if this does not return the proper string, try array.slice(startIndex, endIndex)
//     } else if (playerSelection === 'paper' && getComputerChoice === 'scissors'){
//         return resultsArray.pop();
//     }else if (playerSelection === 'rock' && getComputerChoice === 'scissors'){
//         return resultsArray.slice(1, 2);
//     } else if (playerSelection === 'rock' && getComputerChoice === 'paper'){
//         return resultsArray.pop();
//     } else {
//         return "Invalid Entry" //Probably don't need this. In case user somehow inputs a response other than rock, paper, scissors.
//     };  
// };

// // let playRound = buttonClicked()

// result.innerText = resultsArray[];


//const playerSelection = document.querySelectorAll('selections').onclick





