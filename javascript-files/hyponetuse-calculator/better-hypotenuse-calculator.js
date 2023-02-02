/*
HTML:

<label id="aLabel">Side A:</label>
<br>
<input type="text" id="aTextBox">
<br>

<label id="bLabel">Side B:</label>
<br>
<input type="text" id="bTextBox">
<br>

<button type="button" id="submitButton">Submit</button>
<br>

<label id="cLabel"></label>
*/

let a;
let b;
let c;

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}