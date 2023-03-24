var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

const programmers = new Map([
    ["John", 100000],
    ["Oscar", 120000],
    ["Jordan", 130000],
    ["Olivia", 125000],
    ["Andrea", 145000],
    ["AI", 800000]
]);

let totalWage = 0;
let wage = 0;

for (const [key, value] of programmers) {
    wage = value.toLocaleString("en-US")
    customPrint(`Name: ${key}`);
    customPrint(`Wage: $${wage}`);
    customPrint(" ");
    totalWage += value;
}

totalWage = totalWage.toLocaleString("en-US");
customPrint(`Total wage: $${totalWage}.`)