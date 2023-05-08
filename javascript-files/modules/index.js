import {PI, getArea, getCircumference} from "./math_util.js";
import * as m from "./another_math_util.js";

console.log("PI: " + PI);

let circumference = getCircumference(10);
console.log("Circumference of 10: " + circumference);

let area = getArea(10);
console.log("Area of 10: " + area);

let radius = m.getRadius(area);
console.log("Radius of " + area + ": " + radius);