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
            resultMessage.innerText = "I've been defeated! You win!"; 
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

