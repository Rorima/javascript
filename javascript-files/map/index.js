var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

let numbers = [1, 2, 3, 4, 5];

function square(element) {
    return Math.pow(element, 2);
}

let squares = numbers.map(square);

squares.forEach(element => {
    customPrint(element);
});

let cubes = numbers.map(element => {
    return Math.pow(element, 3)
});

customPrint(" ");
customPrint("Cubes");

cubes.forEach(element => {
    customPrint(element);
});