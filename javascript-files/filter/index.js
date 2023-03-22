var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(age => {
    return age >= 18;
});

adults.forEach(element => {
    customPrint(element);
});