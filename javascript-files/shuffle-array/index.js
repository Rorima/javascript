var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffle(array) {
    let currentIndex = array.length - 1;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * array.length);

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;

        currentIndex -= 1;
    }
}

shuffle(cards);

cards.forEach(element => {
    customPrint(element);
});