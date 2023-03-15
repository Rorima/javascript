/*
// For loop
let i;
for(i = 0; i < 3; i = i + 1)
{
    console.log(i);
}


// Shorter version
for(let i = 0; i < 3; i++)
{
    console.log(i);
}


// Iterating over an array
let myArray = [1, 2, 3, 'A', 'B', 'C'];
for(var i = 0; i < myArray.length; i++)
{
    console.log("Index:", i, "value:", myArray[i]);
}


// For of
const cars = ["Tesla", "Mercedes", "Honda"];
for(let car of cars){
    console.log(car);
}

// While loop
let i = 0;
while(i < 5)
{
    console.log(i);
    i = i + 1;
}


// Break statement
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


// Continue statement
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
*/