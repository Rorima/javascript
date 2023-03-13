/*
document.getElementById("body").onload = function() {
    document.getElementById("demo").innerHTML = "Page loaded.";
}
*/

document.getElementById("body").onload = function() {
    var text = "";

    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    } else {
        text = "Cookies are not enabled.";
    }

    document.getElementById("demo").innerHTML = text;
}