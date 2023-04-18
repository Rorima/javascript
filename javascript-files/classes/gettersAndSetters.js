var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

class Car {
    constructor(power) {
        this._gas = 25;
        this._power = power;
    }

    get gas() {
        // 50 liters gas tank
        return `${this._gas}L (${this._gas / 50 * 100})%`;
    }

    set gas(value) {
        if (value > 50) {
            value = 50;
        } else if (value < 0) {
            value = 0;
        }
        this._gas = value;
    }

    get power() {
        return `${this._power}hp`;
    }
}

let car = new Car(400);
car.gas = 30;
customPrint(`You car has ${car.power}.`)
customPrint(`You have ${car.gas} of gas.`)