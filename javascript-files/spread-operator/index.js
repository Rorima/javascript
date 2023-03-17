var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

const nums = [3, 1, 5, 2, 4];
customPrint(Math.max(...nums));

const cast1 = ["Shrek", "Fiona", "Donkey"];
const cast2 = ["Cat in boots", "Dragon"];
cast1.push(...cast2);
customPrint(cast1);
