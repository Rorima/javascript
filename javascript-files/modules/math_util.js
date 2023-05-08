export const PI = 3.14159;

export function getCircumference(radius) {
    return Math.round(2 * PI * radius, -2);
}

export function getArea(radius) {
    return Math.round(PI * radius * radius, -2);
}