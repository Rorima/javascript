var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

function sum(...numbers) {
    let total = 0;

    for(let number of numbers) {
        total += number;
    }

    return total;
}

const total = sum(1, 2, 3, 4, 5);
customPrint(total);