function createCanvas() {
    const HTML = `
        <canvas id="myCanvas" width="500" height="500"></canvas>
    `;

    const body = document.querySelector("body");
    body.innerHTML = HTML;

    const canvas = document.getElementById("myCanvas");
    canvas.style.border = "2px solid";
    
    canvas.style.display = "flex";
    canvas.style.margin = "auto";
    canvas.style.marginTop = "15%";
    canvas.style.backgroundColor = "skyblue";
}

createCanvas();

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 5;
context.strokeStyle = "purple";

drawText();

function drawText() {
    context.font = "50px MV Boli";
    context.fillStyle = "green";
    context.textAlign = "center";
    context.fillText("Studying", canvas.width / 2, canvas.height / 2);
}

function drawCircle() {
    context.fillStyle = "purple";
    context.beginPath();
    context.arc(250, 250, 200, 0, 2 * Math.PI);
    context.arc()
    context.stroke();
    context.fill();
}

function poorMansChess() {
    context.fillRect(0, 0, 250, 250);
    context.fillStyle = "white";
    context.fillRect(0, 250, 250, 250)
    context.fillStyle = "black";
    context.fillRect(250, 250, 500, 500)
    context.fillStyle = "white";
    context.fillRect(250, 0, 250, 250)
}

function drawRectangle() {
    context.strokeRect(50, 50, 400, 400);
    context.fillStyle = "purple";
    context.fillRect(100, 100, 300, 300);
}

function drawTriangle() {
    context.fillStyle = "purple";
    context.beginPath();
    context.moveTo(0, 400);
    context.lineTo(250, 0);
    context.lineTo(500, 400);
    context.lineTo(0, 400);
    context.fill();
    context.stroke();
}

function learning() {
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(250, 250);
    context.lineTo(250, 500);
    context.moveTo(500, 0);
    context.lineTo(250, 250);
    context.stroke();
}