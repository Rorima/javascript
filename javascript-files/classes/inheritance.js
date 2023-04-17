var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

class Animal {
    name = "Animal";
    alive = true;

    eat() {
        customPrint(`This ${this.name} is eating.`);
    }

    sleep() {
        customPrint(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    
    name = "Rabbit";

    run() {
        customPrint(`This ${this.name} is running`);
    }
}

class Fish extends Animal {

    name = "Fish";

    swim() {
        customPrint(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal {
    
    name = "Hawk";
    
    fly() {
        customPrint(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

customPrint(rabbit.alive);
rabbit.eat(); // Inherited method
rabbit.sleep(); // Inherited method
rabbit.run(); // Unique method
customPrint(" ");

customPrint(fish.alive);
fish.eat(); // Inherited method
fish.sleep(); // Inherited method
fish.swim(); // Unique method
customPrint(" ");

customPrint(hawk.alive);
hawk.eat(); // Inherited method
hawk.sleep(); // Inherited method
hawk.fly(); // Unique method
customPrint(" ");
