var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

let myNum = 123456.789;

customPrint("<h3>Numbers:</h3>");

customPrint("US:");
customPrint(myNum.toLocaleString("en-US")); // US English
customPrint(" ");

customPrint("IN:");
customPrint(myNum.toLocaleString("hi-IN")); // Hindi
customPrint(" ");

customPrint("DE:");
customPrint(myNum.toLocaleString("de-DE")); // Standard German
customPrint(" ");

customPrint("BR:");
customPrint(myNum.toLocaleString("pt-BR")); // Brazilian Portuguese
customPrint(" ");

customPrint("<h3>Currency:</h3>");

customPrint("USD (US Dollar):");
customPrint(myNum.toLocaleString("en-US", {style: "currency", currency: "USD"}));
customPrint(" ");

customPrint("INR (Indian Rupee):");
customPrint(myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"}));
customPrint(" ");

customPrint("EUR (Euro):");
customPrint(myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"}));
customPrint(" ");

customPrint("BRL (Brazilian Real):");
customPrint(myNum.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));
customPrint(" ");

customPrint("<h3>Percentage:</h3>");

let percNum = .5;
customPrint(percNum.toLocaleString(undefined, {style: "percent"}));

customPrint("<h3>Units:</h3>");

let un = 30;
customPrint("Celsius:");
customPrint(un.toLocaleString(undefined, {style: "unit", unit: "celsius"}));
customPrint(" ");

customPrint("Fahrenheit");
customPrint(un.toLocaleString(undefined, {style: "unit", unit: "fahrenheit"}));
customPrint(" ");

customPrint("Kilometers");
customPrint(un.toLocaleString(undefined, {style: "unit", unit: "kilometer"}));
customPrint(" ");

customPrint("Meters");
customPrint(un.toLocaleString(undefined, {style: "unit", unit: "meter"}));
customPrint(" ");

customPrint("Centimeters");
customPrint(un.toLocaleString(undefined, {style: "unit", unit: "centimeter"}));
customPrint(" ");

customPrint("Miles");
customPrint(un.toLocaleString(undefined, {style: "unit", unit: "mile"}));
customPrint(" ");

customPrint("Kilograms");
customPrint(un.toLocaleString(undefined, {style: "unit", unit: "kilogram"}));
customPrint(" ");

customPrint("Pounds");
customPrint(un.toLocaleString(undefined, {style: "unit", unit: "pound"}));
customPrint(" ");

customPrint("Grams");
customPrint(un.toLocaleString(undefined, {style: "unit", unit: "gram"}));
customPrint(" ");