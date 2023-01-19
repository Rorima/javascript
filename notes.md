# Notes

These are all of the notes I took while studying the playlist JavaScript Tutorial for Beginners made by Bro Code. This is just a reference in case I need to refresh something I have learned. It might not be really useful for anyone else except for me.

[Playlist link](https://www.youtube.com/playlist?list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1).

I stopped [here](https://www.youtube.com/watch?v=I68O9oazLbo&list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1&index=5&ab_channel=BroCode).

I stopped [here](https://www.learn-js.org/en/Operators).

## What is JavaScript?

JS is a web-based programming language. It is used to:

* Add interactive behavior to web pages;
* Build web and mobile applications;
* Create command line tools;
* Develop games.

Important notes: JavaScript is not Java! Knowing HTML and CSS is helpful, but not necessary until much later.

You'll need a web browser and a text editor. You'll need browser because JavaScript runs on browsers. Don't use Internet Explorer.

When creating JavaScript files, make sure they have the .js extension.

Download the Live Server extension in VS Code. This will be useful to run your code.

You'll need to link the JavaScript file to your HTML file. In order to do that, use the `<script></script>` tags inside the body of your HTML document. Inside the first tag, write the name of your js file.

Example:

`<script src="index.js"></script>`

### Printing something on the console

To access the console, right click on the `index.html` and select `Open with Live Server`. Then, right click on the newly opened page and select `inspect element`. In the upper part of the window that will be opened click on `console`.

In order to display something in the console, write inside the js file `console.log("Your text");`.

### Alert boxes

They work almost in the same way `console.log()`. The difference is that it will display a box on the browser instead of printing the message on the console.

Example:

`window.alert("I REALLY LIKE PIZZA")`

### Comments

Comments are written with double foward slashes. `// This is single line a comment`, or like this for multiple lined comments:

```
/*
    And
    This
    Is
    A
    Multiline
    Comment
*/
```

## Variables and data types

A variable can be declared using three different keywords: `var`, `let` and `const`. Using `let` is part of the best practices.

Example:

`let age = 50;`

If you declare a variable but don't assign any value to it, it is called an undefined variable.

### Data types:

JS data types are: 

* number: 3.14, 123
* boolean: true, false
* string: "Hello"
* Array: []
* Object: {}
* undefined
* null

`null` is used when a variable should be marked as empty. `undefined` can be used for this purpose, but it should not be used.

### Declaring and printing some data types

```
let age = 30;
age = age + 1;

let firstName = "John";
let lastName = "Doe";

let student = true;

/* 
    Like in Python, you can separate variables and strings with
    a comma, and a space will be added automatically. You can
    also separate them with the + sign, but then you'll have
    to add the space manually.
*/
console.log(firstName, lastName);
console.log("Is a student?", student);
console.log("Age:", age);
```

## Arithmetic expressions

Example:

```
let students = 20;

students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 3;

let extraStudents = students % 3;
```

JavaScript has an augmented asignment operator, just like C and Python.

`students += 1;`

### Operator precedence:

1. Parenthesis;
2. Exponents;
3. Multiplication & division (whatever comes first);
4. Addition & subtraction (whatever comes first).

## User input

We are going to learn two ways to get input from the user.

### Window prompt

Use the following command to get input from the user using a window prompt:

```
let userName = window.prompt("What is your name?");
console.log(userName);
```

### Using text box

Another way to get input from the user is using a text box. In order to do this, you'll need to create a text box inside the HTML file. This is a little bit advanced, so just copy and paste.

HTML:

```
<label>Enter your name: </label>
<input type="text" id="myText">
<button type="button" id="myButton">Submit</button>
```

The tags `<script></script>` should be under this HTML code. It won't work otherwise.

JS:

```
let userName;
document.getElementById("myButton").onclick = function(){
    userName = document.getElementById("myText").value;
    console.log(userName)
}
```

## Arrays

JS can hold an array of variables in an Array object. An array can also function as a list, a stack or a queue. To define an array, either use the brackets notation or the Array object notation.

```
var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);
```

### Addressing

Use the brackets `[]` operator to address a specific cell in an array.

`console.log(myArray[1]);`

Arrays in JS are sparse, meaning that we can also assign variables to random locations even though previous cells were undefined. Example:

```
var arr = [];
arr[3] = "hello";
console.log(arr);
```

Result:

`(4) [empty × 3, 'hello']`

Which means:

`[undefined, undefined, undefined, "hello"]`

### Array elements

Because JS arrays are just special kinds of objects, you can have elements of different types stored together in the same array. The example below is an array with a string, a number, and an empty object:

`var myArray = ["string", 10, {}];`

## Manipulating arrays

### Pushing and popping

Arrays can also function as a stack. The `push` and `pop` methods insert and remove variables from the end of an array.

Pushing:

```
let myStack = [];
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
```

Popping:

```
console.log(myStack.pop());
console.log(myStack);
```

The `pop` method returns the last item from the stack, removing it from the stack.

### Shifting and unshifting

The `unshift` and `shift` methods are similar to `push` and `pop`, only they work from the beginning of the array. We can use `push` and `shift` to utilize an array as a queue.

`shift` removes the first item from a list while `unshift` inserts an item at the beginning of a list.

Shifting:

```
console.log("Shifting");
console.log(myStack.shift());
```

Unshifting:

```
console.log("Unshifting");
myStack.unshift(1);
console.log(myStack);
```

### Splicing

Splicing arrays in JS removes a certain part from an array to create a new array, made up from the part we took out. For example, if we wanted to remove the five numbers from the following array beginning from the 3rd index, we would do the following:

```
myStack = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newStack = myStack.splice(3, 5);
console.log(myStack);
console.log(newStack);
```

This means that a new stack will be created containing five numbers from the 3rd index. The following will be printed on the log:

myStack: `(4) [1, 2, 3, 9]`
newStack: `(5) [4, 5, 6, 7, 8]`

Notice that the first array was modified, losing it's values from the index indicated until the stop indicated.

