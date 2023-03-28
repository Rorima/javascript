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
    userName;

    walk() {
        console.log(`${this.userName} is walking.`);
    }

    stopWalking() {
        console.log(`${this.userName} stopped walking.`);
    }

    infect() {
        console.log(`${this.userName} infected a person!`);
    }
}

const z1 = new Zombie();
const z2 = new Zombie();
const z3 = new Zombie();

z1.userName = "Gerald";
z2.userName = "Cloe";
z3.userName = "Stacy";

z1.infect();
z2.walk();
z2.stopWalking();
z3.infect();