function createBox() {
    let html = `
        <p id="square"></p>
    `;

    document.querySelector("body").innerHTML = html;
    let square = document.getElementById("square");
    
    square.style.width = "200px";
    square.style.height = "200px";
    square.style.border = "2px solid";

    // This was the most difficult thing I've ever come across in JS/HTML/CSS; centering something on the screen
    square.style.margin = "auto";
    square.style.marginTop = "25%";
}

createBox();

const square = document.querySelector("#square");
breathe();

function breathe() {
    let timerID = null;
    let scaleX = 1;
    let scaleY = 1;
    let alternate = 0;

    timerID = setInterval(callBreathes, 1400);
    
    function breatheIn() {
        if (scaleX >= 2 || scaleY >= 2) {
            clearInterval(timerID);
        } else {
            scaleX += 0.01;
            scaleY += 0.01;

            square.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }

    function breatheOut() {
        if (scaleX <= 0.5 || scaleY <= 0.5) {
            clearInterval(timerID);
        } else {
            scaleX -= 0.01;
            scaleY -= 0.01;

            square.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }

    function callBreathes() {
        if (alternate) {
            timerID = setInterval(breatheIn, 2);
            alternate = 0;
        } else {
            timerID = setInterval(breatheOut, 5);
            alternate = 1;
        }
    }
}
