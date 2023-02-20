var values = "";
function customPrint(value){
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

document.getElementById("button1").innerHTML = "6 sided dice";
document.getElementById("button2").innerHTML = "8 sided dice";
document.getElementById("button3").innerHTML = "12 sided dice";

function ranNum(value){
    return Math.floor(Math.random() * value) + 1;
}

document.getElementById("button1").onclick = function(){
    document.getElementById("item1").innerHTML = ranNum(6);
}

document.getElementById("button2").onclick = function(){
    document.getElementById("item2").innerHTML = ranNum(8);
}

document.getElementById("button3").onclick = function(){
    document.getElementById("item3").innerHTML = ranNum(12);
}

customPrint("Six sided dice: ");
x = ranNum(6);
customPrint(x);

customPrint("");

customPrint("Eight sided dice:");
x = ranNum(8);
customPrint(x);