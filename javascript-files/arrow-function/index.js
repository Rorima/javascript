var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

let greet = (userName) => {customPrint("Hello, " + userName + "!");}

let greet2 = userName => customPrint("Hello, " + userName + "!");

let sum = (a, b) => a + b;

greet("Ron");
greet2("Nor");

customPrint(sum(9, 9));