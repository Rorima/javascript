var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

let prices = [5, 10, 15, 20, 25];

function checkOut(total, element) {
    return total + element;
}

total = prices.reduce(checkOut);

customPrint(`The total price is $${total}.`)