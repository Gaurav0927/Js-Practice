let randomNumber = parseInt(Math.random() * 100 + 1);

// console.log(randomNumber); 

const userInput = document.querySelector("#guessField");

const submit = document.getElementById("subt");

const startOver = document.querySelector(".resultParas");

const guessSlot = document.querySelector(".guesses");

const remaining = document.querySelector(".lastResult");

const loworHigh = document.querySelector(".loworHigh");

const p = document.createElement("p");

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if(playGame) {

    submit.addEventListener("click", function(e) {

        e.preventDefault();

        const guess = parseInt(userInput.value);

        // console.log(guess);

        validateGuess (guess)

    })

}

function validateGuess (guess) {

    if(isNaN(guess)) {
        alert(`Please enter a valid Number`);
    }else if (guess < 1) {
        alert(`Please enter a number greater than 1`);
    }else if (guess > 100) {
        alert(`Please enter a number less than 100`)
    }else {

        prevGuess.push(guess)

        // console.log(prevGuess);

        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over`);
            endGame();
        }else {

            displayGuess(guess);
            checkGuess(guess);

        }

    }



};

function checkGuess (guess) {

    if(guess === randomNumber) {

        displayMessage(`You have guessed random number ${randomNumber} correctly`)

    }else if(guess < randomNumber) {

        displayMessage(`Your random number is way too low`);

    }else if (guess > 100) {

        displayMessage(`Your random number is way too large`);

    }

};

function displayGuess (guess) {

    userInput.value = '';

    guessSlot.innerHTML += `${guess},`

    numGuess++;

    remaining.innerHTML = `${11 - numGuess}`


};

function displayMessage (message) {
    loworHigh.innerHTML = `Your message is ${message}`
}

function endGame () {

    userInput.value = '';
    userInput.setAttribute("disabled","");
    p.classList.add("button");
    p.innerHTML = `<h3 id = "newGame">Start New Game</h3>`
    p.style.backgroundColor = "blue";
    p.style.padding = "12px";
    p.style.textAlign = "center";
    p.style.borderRadius = "50px";
    p.style.width = "100%";
    startOver.appendChild(p);
    playGame = false;
    newGame();

};

function newGame() {

    const newGame = document.getElementById("newGame");

    newGame.addEventListener("click", function(e) {

        randomNumber = parseInt(Math.random() * 100 + 1);

        prevGuess = [];

        numGuess = 1;

        guessSlot.innerHTML = "";

        remaining.innerHTML = `${11 - numGuess}`;

        userInput.removeAttribute("disabled");

        startOver.removeChild(p);

        playGame = true;

    });

};