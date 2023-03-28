var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

class Player {
    score = 0;

    pause() {
        customPrint("You paused the game.");
    }

    exit() {
        customPrint("You exited the game.");
    }
}

const player1 = new Player();
const player2 = new Player();
player1.score += 1;
player2.score += 2;
customPrint(player1.score);
customPrint(player2.score);
player1.pause();
player1.exit();

class Zombie {
    name;

    walk() {
        console.log(`${this.name} is walking.`);
    }

    stopWalking() {
        console.log(`${this.name} stopped walking.`);
    }

    infect() {
        console.log(`${this.name} infected a person!`);
    }
}

const z1 = new Zombie();
const z2 = new Zombie();
const z3 = new Zombie();

z1.name = "Gerald";
z2.name = "Cloe";
z3.name = "Stacy";

z1.infect();
z2.walk();
z2.stopWalking();
z3.infect();