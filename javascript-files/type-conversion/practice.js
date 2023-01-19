let name = window.prompt("Type your name:");
let age = window.prompt("Type your age:");
let weight = window.prompt("Type your weight in KG:");

age = Number(age) + 10;
weight = Number(weight) - 10;

console.log("Ten years from now you're going to be", age, "years old and weigh", weight, "KG.");