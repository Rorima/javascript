class Car {

    static numberOfCars = 0;

    constructor(model) {
        this.model = model;
        Car.numberOfCars += 1;
        customPrint(`Total number of cars: ${Car.numberOfCars}`)
    }

    static startRace() {
        customPrint("3... 2... 1... GO!!!")
    }
}

var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

// 1 car
const car1 = new Car("Mustang");
// 2 cars
const car2 = new Car("Corvette");
// 3 cars
const car3 = new Car("BMW");

Car.startRace();