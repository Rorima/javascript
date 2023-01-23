let answer = window.prompt("Is your name 'John Doe'?");

if(answer === "yes" || answer === "Yes"){
    console.log("Welcome, John Doe!");
} else {
    let userName = window.prompt("Type your name:");
    console.log("Welcome,", userName + "!");
}