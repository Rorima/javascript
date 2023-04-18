var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

function displayInfo(car) {
    customPrint(`Model: ${car.model},`);
    customPrint(`Year: ${car.year},`);
    customPrint(`Color: ${car.color}.`);
}

function changeColor(car, color) {
    car.color = color;
}

displayInfo(car1);
customPrint(" ");

changeColor(car1, "purple");
displayInfo(car1);
customPrint(" ");

displayInfo(car2);
customPrint(" ");

displayInfo(car3);