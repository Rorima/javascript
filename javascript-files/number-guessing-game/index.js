var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

function createHTML() {
    const D = document.getElementById("demo");
    D.innerHTML = '<h1>Number Guessing Game</h1>';
    
    D.innerHTML += '<p>Pick a number between 1 and 10.</p>';

    D.innerHTML += '<label>Enter a guess: </label>';
    D.innerHTML += '<input id="guessField">'
    D.innerHTML += '<input type="submit" id="submitButton">'
}

createHTML()

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function() {
    let guess = document.getElementById("guessField").value;
    guesses += 1;

    if (guess == answer) {
        alert(`${answer} is the correct number! It took you ${guesses} guesses.`);
    } else if (guess < answer) {
        alert("Too small!");
    } else {
        alert("Too large!");
    }
}