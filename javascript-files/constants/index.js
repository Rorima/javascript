var values = "";

function customPrint(value)
{
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);
circumference = 2 * PI * radius;

console.log("The circumference is", circumference);

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

customPrint(cars)
