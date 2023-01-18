// let userName = window.prompt("What is your name?");
// console.log(userName);


let userName;
document.getElementById("myButton").onclick = function(){
    userName = document.getElementById("myText").value;
    console.log(userName)
}
