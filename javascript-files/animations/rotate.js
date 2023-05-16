function createDiv() {
    const body = document.querySelector("body");
    body.innerHTML += `
        <div id="myDiv"></div>
    `;

    const myDiv = document.getElementById("myDiv");
    myDiv.style.width = "100px";
    myDiv.style.height = "100px";
    myDiv.style.margin = "0px";
    myDiv.style.position = "relative";
    myDiv.style.padding = "0%"
    myDiv.style.backgroundColor = "green";
}

function createButton() {
    const body = document.querySelector("body");
    body.innerHTML = `
        <button id="myButton">Begin</button>
    `;
}

createButton();
createDiv();

const myButton = document.querySelector("#myButton");
const myDiv = document.querySelector("#myDiv");
myButton.addEventListener("click", begin);

function begin() {
    let timerID = null;
    let degrees = 0;
    let x = 0;
    let y = 0;

    timerID = setInterval(frame, 5);

    function frame() {
        if (x >= 200 || y >= 200) {
            clearInterval(timerID);
        } else {
            degrees += 2;
            x += 1;
            y += 1;
            // myDiv.style.transform = "rotateX("+degrees+"deg)";
            myDiv.style.left = x + "px";
            myDiv.style.top = y + "px";
            // myDiv.style.transform = "rotateY("+degrees+"deg)";
            myDiv.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}