# Notes

These are all of the notes I took while studying the playlist JavaScript Tutorial for Beginners made by Bro Code. This is just a reference in case I need to refresh something I have learned. It might not be really useful for anyone else except for me.

[Playlist link](https://www.youtube.com/playlist?list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1).

Bro code: I stopped [here](https://www.youtube.com/watch?v=tyK6e8Zvdvk&list=PLZPZq0r_RZOMRMjHB_IEBjOW_ufr00yG1&index=31&ab_channel=BroCode).

JS.org: I stopped [here](https://www.learn-js.org/en/Promises).

W3Schools: I stopped [here](https://www.w3schools.com/js/js_events.asp)

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

A variable can be declared using three different keywords: `var`, `let` and `const`. Using `let` is part of the best practices. `let` and `const` provide a **Block Scope** in JS. Variables declared inside a {} block cannot be accessed from outside the block. Variables declared with the `var` keyword can NOT have block scope. This means that variables declared with `var` are global variables.

The `var` keyword is used in all JavaScript code from 1995 to 2015. The `let` and `const` keywords were added to JavaScript in 2015. If you want your code to run in older browsers, you must use `var`.

Example:

`let age = 50;`

If you declare a variable but don't assign any value to it, it is called an undefined variable. 

### Const

Keep in mind that `const` variables must be assigned a value when they are declared. Always declare a variable with `const` when you know that the value should not be changed.

Example:

`const PI = 3.14159265359;`

The keyword `const` is a little misleading. It does not define a constant value. It defines a constant reference to a value. Because of this you can NOT reassign a constant value, array or object, but you CAN change the elements of a constant array and the properties of a constant object.

#### Constant arrays

You can change the elements of a constant array:

```
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");
```

You can NOT reassign the array:

```
const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
```

#### Constant objects

You can change the properties of a constant object:

```
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";
```

Bt you can NOT reassign the object:

```
const car = {type:"Fiat", model:"500", color:"white"};

car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR
```

### Data types:

JavaScript has 8 datatypes:

1. String
    `let color = "yellow"`
2. Number
    `let length = 16;`
3. BigInt
    `let x = BigInt("123456789012345678901234567890");`
4. Boolean
    `let x = true;`
5. Undefined
    `let firstName = undefined;`
6. Null
    `let age = null;`
7. Symbol

8. Object
    `const person = {firstName:"John", lastName:"Doe"}; `

`null` is used when a variable should be marked as empty. `undefined` can be used for this purpose, but it should not be used.

### The object datatype:

The object data type can contain:

1. An object
    `const person = {firstName:"John", lastName:"Doe"}; `
2. An array object
    `const cars = ["Saab", "Volvo", "BMW"];`
3. A date object
    `const date = new Date("2022-03-25");`

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

## JavaScript Objects

In real life, a car is an object. A car has properties like weight and color, and methods like start and stop. All cars have the same properties, but the property values differ from car to car. All cars have the same methods, but the methods are performed at different times.

Objects are variables. The difference between them and simple variables is that objects can contain many values. This code assigns many values (fiat, 500, white) to a variable named car:

`const car = {type: "Fiat", model: "500", color: "white"};`

The values are written as name:value pairs (name and value separated by a colon). It is acommon practice to declare objects with the `const` keyword.

An object in JS is usually used as a data structure, similar to a dictionary in Python or a map in Java.

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

JS objects are containers for **named values** called properties.

### Object Methods

Objects can also have methods. Methods are actions that can be performed on objects. Methods are stoered in properties as **function definitions**. You'll learn more about functions in the future. If you don't understand this part very well, do not be afraid. When you learn functions, just make sure to come back to understand thoroughly how object methods work.

A method is a function stored as a property:

```
const person = {
    firstName: "John",
    lastName: "Doe",
    id : 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
```

The `this` keyword refers to the outer scope variables, the variables that were declared inside the person object. If you don't use the `this` keyword, you cannot use these variables.

This is how you access a method:

`console.log(person.fullName());`

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

### The ternary operator

The ternary operator is a shorcut for an if/else statement. It takes 3 operands:

1. A condition with ?
2. An expression if true :
3. An expression if false

Syntax:

condition ? exprIfTrue : exprIfFalse

Code example:

```
let age = 18;

age >= 18 ? console.log("You may enter!") : console.log("You may not enter!");
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

#### Switch with conditions

You can also test for certain conditions. Let's suppose you want to tell how good of a grade a student got:

```
let grade = 65;

switch(true) {
    case grade >= 90:
        console.log("You did great!");
        break;
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 60:
        console.log("You barely passed!");
        break;
    case grade < 60:
        console.log("You FAILED!");
        break;
    default:
        console.log(grade, "is not a valid number!");
}
```

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

#### Do while

It works the same way as the while loop, but the condition is checked in the end instead of the beginning.

```
let i = 0;
do {
    console.log(i);
    i = i + 1;
} while(i < 5)
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

## Functions

Functions are code blocks that can have arguments, and functions have their own scope. In JS, functions are a very importante feature of the program, and especially the fact that they can access local variables of a parent function.

There are two ways to define functions in JS - named functions and anonymous functions. To define a named function, we use the `function` statement as follows:

```
function greet(name)
{
    return "Hello " + name + "!";
}

console.log(greet("Bob"));
```

In this funciton, the `name` argument to the `greet` function is used inside the function to construct a new string and return it using the `return` statement.

To define an anonymous function, we can alternatively use the following syntax:

```
let greeter = function(name)
{
    return "Hello " + name + "!";
}

console.log(greeter("Tim"));
```

## Math random

The function Math.random(); returns a floating point number between 0 and 1.

Let's suppose you want to make a dice:

`let x = Math.floor(Math.random() * 6) + 1;`

The result is multiplied by 6 because the random function returns a number between 0 - almost never 0 alone. It always have a non-zero decimal - and 1, so multiplying it gives us numbers between 0 and 5 (computers always start with 0). The floor function removes the decimal part and leaves only the integer. The `+ 1` adds the six we want and removes the 0.

## Useful string methods

length: Returns how many characters are within a string.
`let nameLength = userName.length;`

charAt: Returns a character by its index.
`let firstLetter = userName.charAt(0);`

indexOf: Returns the index of the first occurrence of a character.
`let firstO = userName.indexOf('o');`

lastIndexOf: Returns the index of the last occurrence of a character.
`let lastO = userName.lastIndexOf('o');`

trim: Returns a string without empty spaces at the beginning and at the end.
`trimmedString = userName.trim();`

toUpperCase: Returns upper case string.
`upperCaseString = userName.toUpperCase();`

toLowerCase: Returns lower case string.
`lowerCaseString = userName.toLowerCase();`

replaceAll: Replaces all instances of a given character. The first parameter is what we want replaced, and the second is what we want to replace it with.
```
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-"," ");
```

## String slicing

The method `slice()` extracts a section of a string and returns it as a new string, without modifying the original string. Within the parenthesis you can type two values: the starting index and the ending index. If you don't add the last value, it's assumed to copy everything to the end of the string.

Code example:

```
let fullName = "John Doe";
let firstName;
let lastName;

// This goes until four because the last char is not included
firstName = fullName.slice(0, 4);
lastName = fullName.slice(5);
```

You can also have the same result by writing a smarter code. Let's use the method `indexOf()` to do that.

```
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);
```

The first line gets the first name indicating that the slicing should happen between 0 and the first instance of a white space, and the second line gets the last name by slicing and storing the part after the space.

## Pop-up boxes

There are three types of pop-up boxes in JavaScript: confirm, alert, and prompt. To use any of them, type:

```
confirm("Hi!");
prompt("Bye!");
alert("Hello!");
```

Confirm boxes will return `true` if ok is selected, and return `false` if cancel is selected. Alert boxes won't return anything. Prompt boxes will return whatever is in the text box. Prompt boxes also have an optional second parameter, which is the text that will already be in the text box.

## Checked property

This property lets us know if a checkbox or a radiobutton is selected. It gives us a boolean value.

First, create the checkbox:

```
<label for="myCheckBox">Subscribe</label>
<input type="checkbox" id="myCheckBox">

<br>

<button id="myButton">Submit</button>
```

Now create a function in the JS file to get the value from the checkbox using the `checked` property:

```
document.getElementById("myButton").onclick = function() {
    const isCheckd = document.getElementById("myCheckBox").checked;
    if(isCheckd == true) {
        customPrint("You're subscribed!");
    } else {
        customPrint("You're NOT subscribed!");
    }
}
```

### Checked property on radiobuttons

Create the radiobuttons:

```
<label for="visaBtn">Visa</label>
<input type="radio" name="card" id="visaBtn">
<br>
<label for="masterBtn">Master Card</label>
<input type="radio" name="card" id="masterBtn">
<br>
<label for="payBtn">Paypal</label>
<input type="radio" name="card" id="payBtn">
<br>
<button id="myButton2">Submit 2</button>
```

Create the function for the button:

```
document.getElementById("myButton2").onclick = function() {
    const v = document.getElementById("visaBtn").checked;
    const m = document.getElementById("masterBtn").checked;
    const p = document.getElementById("payBtn").checked;
    const radioButtons = [v, m, p];
    const cardNames = ["Visa", "Master Card", "PayPal"];
    
    for (let index = 0; index < radioButtons.length; index++) {
        if (radioButtons[index]) {
            customPrint("You're paying with " + cardNames[index] + ".");
            break;
        }
    }
}
```

## Callbacks

Callbacks are functions that are passed as arguments to other functions. This is a very important feature of asynchronous programming, and it enables the function that receives the callback to call our code when it finishes a long task, while allowing us to continue the execution of the code.

For example:

```
var callback = function() {
    console.log("Done!");
}

setTimeout(callback, 5000);
```

This code waits 5 seconds and prints out "Done!" when the 5 seconds are up. Note that this code will not work in the interpreter because it is not designed for handling callbacks.

It is also possible to define callbacks as anonymous functions, like so:

```
setTimeout(function() {
    console.log("Done!");
}, 5000);
```

Like regular functions, callbacks can receive arguments and be executed more than once.

## Arrow functions

Arrow functions are a feature of ES6 and their behavior are generally the same of a function. They are like lambda functions in Python. These are anonymous functions with a special syntax.

Arrow functions are often used as callbacks of native JS functions like map, filter or sort. The reason of their name is due to the use of `=>` in the syntax.

To define an arrow function, we use the `() => {}` strucutre as follows:

```
const greet = (name) => { return "Hello " + name + "!"; }

console.log(greet("Eric"));      // prints out Hello Eric!
```

In this function, the `name` argument to the `greet` function is used inside the function to construct a new string and return it using the `return` statement.

In case that the function only receives one argument, we can omit the parenthesis:

```
const greet = name => { return "Hello " + name + "!"; }

console.log(greet("Eric"));      // prints out Hello Eric!
```

And, in case that we want to do an explicit return of the function and we have only one line of code, we can avoid the `return` statement and omit the backets too:

```
const greet = name => "Hello " + name + "!";

console.log(greet("Eric"));      // prints out Hello Eric!
```

Using an arrow as a callback compared to a normal function:

```
let numbers = [3, 5, 8, 9, 2];

// Old way
function multiplyByTwo(number){
    return number * 2;
}

let multipliedNumbers = numbers.map(multiplyByTwo);

console.log(multipliedNumbers);              // prints out: 6, 10, 16, 18, 4

// Using ES6 arrow functions
const multiplyByTwo = number => number * 2;

let multipliedNumbers = numbers.map(multiplyByTwo);

console.log(multipliedNumbers);              // prints out: 6, 10, 16, 18, 4
```

## Template literals

Template literals are delimited with backticks (`) instead of double or single quotes. They allow embedded variables and expressions. In order to embed a variable, use a dolar sign followed by curly braces:

```
console.log(\\`Hello, ${userName}!\`);
```

Code example:

```
let userName = "John";
let items = 3;
let total = 75;

console.log(`Hello, ${userName}!`);
console.log(`You have ${items} items in your cart.`);
console.log(`Your total is $ ${total}.`);
```

You can also write multiple line strings using these backticks:

```
let text = 
`Hello, ${userName}!
You have ${items} items in your cart.
Your total is $ ${total}.`

console.log(text);
```

## Format currency

The `toLocaleString(locale, {options});` method returns a string with a language sensitive representation of a number. It is perfect for formatting a number as some currency.

The `locale` argument specifies the language, which if pass `undefined` it will use the default from your browser, while the argument `options` deals with the formatting. Using it we can specify if the number is a currency, a unit of mesurament, a percent and etc.

Example:

```
let myNum = 123456.789;

customPrint("US:");
customPrint(myNum.toLocaleString("en-US")); // US English

customPrint("IN:");
customPrint(myNum.toLocaleString("hi-IN")); // Hindi

customPrint("DE:");
customPrint(myNum.toLocaleString("de-DE")); // Standard German

customPrint("BR:");
customPrint(myNum.toLocaleString("pt-BR")); // Brazilian Portuguese
```

### Currency

You'll choose currency using the `options` argument.

```
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
```

### Percentage

```
let percNum = .5;
customPrint(percNum.toLocaleString(undefined, {style: "percent"}));
```

### Units

```
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
```