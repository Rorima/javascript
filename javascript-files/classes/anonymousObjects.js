var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
    }
}

let cards = [new Card("A", "Hearts"), new Card("A", "Spades"), new Card("A", "Diamonds"), new Card("A", "Clubs")];

cards.forEach(card => customPrint(`Value: ${card.value} <br>suit: ${card.suit}<br>`));