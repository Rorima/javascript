var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

const greeting = function() {
    customPrint("Hello!");
}
greeting();

let counter = 0;

document.getElementById("button1").innerHTML = "Increase";
document.getElementById("button2").innerHTML = "Decrease";

document.getElementById("button1").onclick = function() {
    counter += 1;
    document.getElementById("demo").innerHTML = counter;
}

document.getElementById("button2").onclick = function() {
    counter -= 1;
    document.getElementById("demo").innerHTML = counter;
}