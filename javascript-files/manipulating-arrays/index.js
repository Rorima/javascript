let myStack = [];

console.log("Pushing");
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
console.log(myStack);

console.log("Popping");
console.log(myStack.pop());
console.log(myStack);

console.log("Shifting");
console.log(myStack.shift());

console.log("Unshifting");
myStack.unshift(1);
console.log(myStack);

console.log("Splicing");
myStack = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newStack = myStack.splice(3, 5);
console.log(myStack);
console.log(newStack);
