function createDiv() {
    const body = document.querySelector("body");
    body.innerHTML = `
        <div id="myDiv"></div>
    `;

    const myDiv = document.querySelector("#myDiv");
    myDiv.style.backgroundColor = "lightgreen";
    myDiv.style.width = "50px";
    myDiv.style.height = "50px";
    myDiv.style.border = "2px solid";
    myDiv.style.margin = "0px"
    myDiv.style.padding = "0%"
    myDiv.style.position = "relative";
}

createDiv();

const myDiv = document.querySelector("#myDiv");

let y = 0;
let x = 0;

window.addEventListener("keydown", move);
const AMOUNT = 10;

function move(event) {
    console.log(event.key + y)
    switch (event.key) {
        case "ArrowDown":
            y += AMOUNT;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y -= AMOUNT;
            myDiv.style.top = y + "px";
            break;
        case "ArrowLeft":
            x -= AMOUNT;
            myDiv.style.left = x + "px";
            break;
        case "ArrowRight":
            x += AMOUNT;
            myDiv.style.left = x + "px";
            break;
    }
}




