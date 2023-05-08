export function getRadius(area) {
    return Math.round(Math.sqrt(area / Math.PI), -2);
}