/*
Formula: c = sqrt(a ** 2 + b ** 2)
*/

let a;
let b;
let c;

a = window.prompt("Enter side a:");
a = Number(a);

b = window.prompt("Enter side b:");
b = Number(b);

//c = (a ** 2 + b ** 2)**0.5;
c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log("The hypotenuse is:", c);