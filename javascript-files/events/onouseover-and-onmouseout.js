document.getElementById("console").onmouseover = function() {
    document.getElementById("demo").innerHTML = "Your mouse pointer is <mark>inside</mark> the console!";
}

document.getElementById("console").onmouseout = function () {
    document.getElementById("demo").innerHTML = "Your mouse pointer is <mark>outside</mark> the console!";
}