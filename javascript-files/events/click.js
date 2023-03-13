var x = 0;

function createHTML() {
    const D = document.getElementById("demo");
    D.innerHTML = `<label id="incLabel">${x}</label><br>`
    D.innerHTML += '<button id="inc">Increment</button>';
}

createHTML();

document.getElementById("inc").onclick = function() {
    x += 1;
    document.getElementById("incLabel").innerHTML = x;
}