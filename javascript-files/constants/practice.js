/*
Create a program that calculates 10% of numbers.
*/

const TITHE = 0.1;
let value = window.prompt("Type the value:");
let result = Number(value) * TITHE;
console.log("Ten percent of", value, "is", result);
