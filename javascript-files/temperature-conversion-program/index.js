function createHTML() {
    const D = document.getElementById("demo");
    D.innerHTML = 
    '<label> Enter a temperature: </label>';

    D.innerHTML += 
    '<input type"text" id="textBox"><br>';

    D.innerHTML +=
    '<label>Convert to: </label><br>';

    D.innerHTML +=
    '<input type="radio" id="cButton" name="unit"> ';

    D.innerHTML +=
    '<label>Celsius</label><br>';

    D.innerHTML +=
    '<input type="radio" id="fButton" name="unit"> ';

    D.innerHTML +=
    '<label>Fahrenheit</label><br>';

    D.innerHTML +=
    '<button type="button" id="submitButton">Submit</button><br>';

    D.innerHTML +=
    '<label id="tempLabel"></label>';
}

function toCelsius(temp) {
    return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}

createHTML();

document.getElementById("submitButton").onclick = function() {
    let temp = document.getElementById("textBox").value;
    temp = Number(temp);

    if(document.getElementById("cButton").checked) {
        let c = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = `${temp}° Fahrenheit is ${c}° Celsius.`;
    } else if(document.getElementById("fButton").checked) {
        let f = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = `${temp}° Celsius is ${f}° Fahrenheit.`;
    } else {
        document.getElementById("tempLabel").innerHTML = "Select a unit.";
    }
}