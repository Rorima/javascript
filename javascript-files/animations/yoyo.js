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
    square.style.position = "relative";
}

createBox();

const square = document.querySelector("#square");
breathe();

function breathe() {
    let timerID = null;
    let degrees = 0;
    let x = 0;
    let alternate = true;

    goBackwards();
    setInterval(callMoves, 3500);
    
    function goForward() {
        timerID = setInterval(() => {
            degrees += 1;
            x += 1;
            
            square.style.left = x + "px";
            
            square.style.transform = "rotateZ("+degrees+"deg)";

            if (x >= 300) {
                clearTimeout(timerID);
            }

        }, 5);
    }

    function goBackwards() {
        timerID = setInterval(() => {
            degrees -= 1;
            x -= 1;
            
            square.style.left = x + "px";
            
            square.style.transform = "rotateZ("+degrees+"deg)";

            if (x <= (-300)) {
                clearTimeout(timerID);
            }

        }, 5);
    }

    function callMoves() {
        if (alternate) {
            goForward()
            alternate = false;
        } else {
            goBackwards()
            alternate = true;
        }
    }
}
