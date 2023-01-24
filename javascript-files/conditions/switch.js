let fruit = window.prompt("Type your favorite fruit:");

switch(fruit)
{
    case "apple":
    case "pineapple":
    case "watermelon":
    case "banana":
        console.log("Good choice!");
        break;
    default:
        console.log("No...");
        break;
}