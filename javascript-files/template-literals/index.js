var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

//let userName = window.prompt("Enter your name: ");
//customPrint(`Hello, ${userName}!`);

let userName = "John";
let items = 3;
let total = 75;

console.log(`Hello ${userName}!`);
console.log(`You have ${items} items in your cart.`);
console.log(`Your total is $ ${total}.`);