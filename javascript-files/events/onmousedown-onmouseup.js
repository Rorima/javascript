function createDiv() {
    const html = `
        <div id="temp"></div>
    `

    document.getElementById("demo").innerHTML += html;
    const div = document.getElementById("temp");
    div.style.backgroundColor = "lightgreen";
    div.style.width = "100px";
    div.style.height = "100px";
}

createDiv();

const element = document.getElementById("temp");
element.onmousedown = function () {element.style.backgroundColor = "red"}
element.onmouseup = function () {element.style.backgroundColor = "lightgreen"}