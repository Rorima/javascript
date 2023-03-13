document.getElementById("demo").innerHTML = '<input type="text" id="myEntry"><br><p id="text"></p>';

document.getElementById("myEntry").onkeydown = function() {
    document.getElementById("text").innerHTML = "You <mark>pressed</mark> a key!";
}

document.getElementById("myEntry").onkeyup = function() {
    document.getElementById("text").innerHTML = "You <mark>released</mark> a key!";
}