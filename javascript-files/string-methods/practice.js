var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

function stringLength(string) {
    return string.length;
}

function firstChar(string) {
    return string.charAt(0);
}

function indexOfA(string) {
    let result = string.toLowerCase().indexOf('a');
    if(result >= 0) {
        return result;
    } else {
        return "There are no 'A's in the name given.";
    }
}

function trimString(string) {
    return string.trim();
}

function stringUpper(string) {
    return string.toUpperCase();
}

function stringLower(string) {
    return string.toLowerCase();
}

let inputLabel = '<label for="inText">Type your name: </label>\n'
let inputBox = '<input type="text" id="inText" name="inText">\n';
let submitButton = '<button type="button" id="submitButton">Submit</button>\n';
let htmlCode = inputLabel + inputBox + submitButton;

customPrint(htmlCode);

document.getElementById("submitButton").onclick = function() {
    let userName = document.getElementById("inText").value;
    let string = "Hello, " + userName + "!";
    customPrint(string);
    customPrint("Length: " + stringLength(userName));
    customPrint("First char: " + firstChar(userName));
    customPrint("Index of A: " + indexOfA(userName));
    customPrint("Trimmed name: " + trimString(userName));
    customPrint("Uppercase name: " + stringUpper(userName));
    customPrint("Lowercase name: " + stringLower(userName));
}