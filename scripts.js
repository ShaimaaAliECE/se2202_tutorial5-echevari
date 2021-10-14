let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
let newNextPlayer = document.querySelector("#next -lbl");
newNextPlayer.innerHTML = nextPlayer;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    let cells = document.querySelectorAll("td");
    let brackets = `<button id='edit-btn'>[ ]</button>`

    for (let i = 0; i < cells.length; i++){
        cells[i].innerHTML = brackets;
    }
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    let clickButton = event.target;
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

        if (clickButton.innerText === "[ ]"){

            if(nextPlayer === 'X'){
                clickButton.innerText = "[" + nextPlayer+ "]";
                nextPlayer = "O";
                clickButton.disabled = true;
                newNextPlayer.innerHTML = nextPlayer;
            }

            else if (nextPlayer === 'O'){
                clickButton.innerText = "[" + nextPlayer + "]";
                nextPlayer = "X";
                clickButton.disabled = true;
                newNextPlayer.innerHTML = nextPlayer;
            }
        }

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    if (isGameOver())
    {
        let gameOver = document.querySelector("#game-over-lbl");
        gameOver.innerHTML = `<h1>Game Over</h1>`;
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    let disabledBtnsCount = 0;

    for (i in btns){
        if (btns[i].disabled === true){
            disabledBtnsCount++;
        }
    }
    if (disabledBtnsCount == 9){
        return true;
    }

    else {
        return false;
    }
    // This function returns true if all the buttons are disabled and false otherwise 

}
