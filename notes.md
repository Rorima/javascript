# Notes

These are all of the notes I took while studying the playlist JavaScript Tutorial for Beginners made by Bro Code. This is just a reference in case I need to refresh something I have learned. It might not be really useful for anyone else except for me.

[Playlist link](https://www.youtube.com/playlist?list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1).

Bro code: I stopped [here](https://www.youtube.com/watch?v=dKOT5LcouzQ&list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1&index=9&ab_channel=BroCode).

JS.org: I stopped [here](https://www.learn-js.org/en/Functions).

W3Schools: I stopped [here](https://www.w3schools.com/js/js_statements.asp)

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

## JavaScript output

JS can display data in different ways:

* Writing into an HTML element, using `innerHTML`.
* Writing into the HTML output using `document.write()`.
* Writing into an alertbox, using `window.alert()`.
* Writing into the browser console, using `console.log()`.

### Using innerHTML

To access an HTML element, JS can use the `document.getElementById(id)` method. The `id` attribute defines the HTML element. The `innerHTML` property defines the HTML content.

```
document.getElementById("demo").innerHTML = 5 + 6;
```

Changing the innerHTML property of an HTML element is a common way to display data in HTML. Keep in mind that this will only work if the script tags are located below the element you want to change.

### Using document.write()

For testing purposes, it is convenient to use `document.write().`

`document.write("Hello");`

Using `document.write()` after an HTML document is loaded, will delete all existing HTML. For example, if you use it on a "onclick" in a button, it will clear your page. It should only be used for testing.

### Using window.alert()

You can use an alert box to display data:

`window.alert(5 + 6);`

You can skip the `window` keyword. In JS, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the `window` keyword is optional.

`alert(5 + 6);`

### Using console.log()

For debugging purposes, you can call the `console.log()` method in the browser to display data.

`console.log("Hello, world!");` 

### JavaScript Print

JS doesn't have any print object or print methods. You cannot access output devices from JS. The only exception is that you can call the `window.print()` method in the browser to print the content of the current window.

`<button onclick="window.print()">Print this page</button>`

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

## Type conversion

### String to number

Type conversion is the ability to change the data type of a value to another. If you used `window.prompt("How old are you?");` and tried to do some operations with the returned value, you might have noticed that this command returns strings, and not integers. In order to convert a string into a number, use the `Number()` constructor.

```
let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log("Happy Birthday! You are", age, "years old!");
```

### Number to string

```
let y = String(3.14);
```

If you try to convert something that isn't a number into a number, it's value will be `NaN`, which means "not a number".

### String to boolean

Converting an empty string into a boolean will result to false. Anything else will give you true.

```
let z = Boolean("");
```

### Type of

Using `typeof` you can know the data type of a variable.

`console.log(typeof age);`

## Constants

A constant is a variable that can't be changed. Let's create a program that calculates the circumference of a circle. The formula is: Circumference = 2 * pi * radius. A common convention for constants is that you make all letters uppercase.

```
const PI = 3.14159;
let radius = 9;
let circumference = 2 * PI * radius;
console.log("The circumference is", circumference);
```

## Math methods

Math is an instrinsic object that provides basic mathematics functionality and constants.

### Round

`console.log(Math.round(x));`

### Floor

Removes the decimal part. Rounds down.

`console.log(Math.floor(x));`

### Ceil

Rounds up.

`console.log(Math.ceil(x));`

### Pow

Exponentiation. You have to give the base and the exponent separated by commas.

`console.log(Math.pow(x, 2));`

### Sqrt

Square root.

`console.log(Math.sqrt(x));`

### Abs

Absolute value. 

### Max and min

Tell the highest and lowest value.

```
console.log(Math.max(2, 1, 4, 3));
console.log(Math.min(2, 1, 4, 3));
```

### PI

Pi constant.

`console.log(Math.PI);`

## Operators

### Arithmetic

* \+ Addition
* \- Subtraction
* \* Multiplication
* ** Exponentiation
* / Division
* % Modulus (division remainder)
* ++ Increment
* -- Decrement

### Assignment

* x = y Same as x = x
* x += y Same as x = x + y
* x -= y Same as x = x - y
* x *= y Same as x = x * y
* x /= y Same as x = x / y
* x %= y Same as x = x % y
* x **= y Same as x = x ** y

### Comparison

* == Equal to
* === Equal value and equal type
* != Not equal
* !== Not equal value or not equal type
* \> Greater than
* < Less than
* \>= Greater than or equal to
* <= Less than or equal to
* ? Ternary operator

#### When to use == and ===?

Basically, the only case you're going to use `==` is when you want to check if a variable is undefined. If you use `null === undefined`, it will return `false`, and if you use `null == undefined`, it will return `true`. In all other cases you're going to use `===`.

### Logical Operators

* && and
* || or
* ! not

## Conditions

### The if statement

The if statement allows us to check if an expression is iqual to `true` or `false`, and execute different code according to the result.

```
let banana = "yellow";

if (banana == "yellow")
{
    console.log("Bananas are yellow!");
} else {
    console.log("Bananas are not yellow!");
}
```

To evaluete whether two variables are equal, the `==` operator is used. There is also another equality operator in JavaScript, `===`, which does a strict comparison. This means that it will be true only if the two things you are comparing are the same type as well as same content.

```
console.log("1" == 1); // true
console.log("1" === 1); // false
```

### The switch statement

The `switch` statement is similar to the `switch` statement from the C programming language, but also supports strings. The `switch` statement is used to select between more than two different options, and to run the same code for more than one option.

```
var rank = "Commander";
switch(rank)
{
    case "Private":
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! What can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}
```

In this example, "Private" and "Sergeant" both trigger the first sentence, "Commander" triggers the second sentence and "Captain" triggers the third. If an unknown rank was evaluated, the default keyword defines the action for this case (optional). We must use  the `break` statement between every code block to avoid the `switch` froom executing the next code block. Using the `switch` statement in general is not recommended, because forgetting the `break` key word causes very confusing results.

## Loops

### The for statement

JS has two methods for running the same code several times. It is mainly used for iterating over arrays or objects.

```
let i;
for(i = 0; i < 3; i = i + 1)
{
    console.log(i);
}
```

Shorter version:

```
for(let i = 0; i < 3; i++)
{
    console.log(i);
}
```

#### Iterating over an array

```
let myArray = [1, 2, 3, 'A', 'B', 'C'];
for(var i = 0; i < myArray.length; i++)
{
    console.log("Index:", i, "value:", myArray[i]);
}
```

Notice that we used the `length` property of an array, which returns the number of members in the array, so we know when to stop iterating.

### The while statement

The `while` statement is a more simple version of the `for` statement, which checks if an expression evaluates to `true` and runs as long as it says `true`.

```
let i = 0;
while(i < 5)
{
    console.log(i);
    i = i + 1;
}
```

#### Break and continue statements

The `break` statement allows to stop the execution of a loop. For example, we can create a loop that loops forever using `while(true)` and use the `break` statement to break inside the loop instead by checking that a certain condition was met.

```
let i = 5;
while(true)
{
    console.log(i + " person");
    i -= 1;
    if (i == 0)
    {
        break;
    }
}
```

The `continue`statement skips the rest of the loop and jumps back to the beginning of the loop. For example, if we would want to print only odd numbers using a `for` statemnt, we can do the following:

```
for(let i = 0; i < 10; i++)
{
    // check that the number is even
    if(i % 2 === 0)
    {
        continue;
    }
    // if we got here, then i is odd
    console.log(i, "is an odd number.");
}
```

## Objects

An object in JS is usually used as a data structure, similar to a dictionary in Python or a map in Java. In this tutorial, we will learn how to use objects as a data strucutre.

To initialize an object, use curly braces:

```
let emptyObject = {};
let personObject = {
    firstName: "John",
    lastName: "Doe"
}
```

### Member addressing

Members of objects can be addressed using the brackets operator `[]`, very much like arrays, but just like many other object oriented languages, the period `.` operator can also be used. They are very similar, except for the fact that brackets return a member by using a string, in contrast to the period operator, which requires the member to be a simple word (the word should not contain spaces, start with a number or use illegal characters).

For example, we can continue to fill the person object with more details:

```
personObject.age = 23;
personObject["salary"] = 14000;
```

### Iteration

Iterating over members of a dictionary is not a trivial task, since iterating over objects can also yield members who don't actually belong to an object. Therefore, we must use the `hasOwnProperty` method to check that the member in fact belongs to the object.

```
for (var member in personObject)
{
    if (personObject.hasOwnProperty(member))
    {
        console.log("the member " + member + " of personObject is " + personObject[member])
    }
}
```
