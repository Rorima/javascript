let userName = window.prompt("What is your name?");
let userAge = window.prompt("What is your age?");
let userIq = window.prompt("What is your IQ?");

let msg = "hello " + userName + "!"
document.getElementById("demo").innerHTML = msg;

if(Number(userIq) > 100)
{
    msg = "You're pretty smart, " + userName + "!"
    document.getElementById("demo").innerHTML = msg;
}
