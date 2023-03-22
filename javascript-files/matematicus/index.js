var result, num1, num2, answer;

function showNumber(){
    num1 = Math.random();
    num1 = Math.floor(num1*10) + 1;

    num2 = Math.random();
    num2 = Math.floor(num2*10) + 1;

    result = num1 + num2;

    document.getElementById("question").innerHTML = `${num1} + ${num2} = ?`;

    document.getElementById("entryBox").focus();
}

document.getElementById("sButton").onclick = function() {
    
    answer = document.getElementById("entryBox").value;
    document.getElementById("entryBox").value = "";

    if (answer == result) {
        document.getElementById("p").innerHTML = "You got it!";
    } else {
        document.getElementById("p").innerHTML = "You didn't get it :( <br>";
        document.getElementById("p").innerHTML += `${num1} + ${num2} = ${result}`;
    }
    
    showNumber();
}

showNumber();