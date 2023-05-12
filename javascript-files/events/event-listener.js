function createDiv() {
    const html = `
        <div id="myDiv"></div>
    `

    document.getElementById("demo").innerHTML = html;
    const div = document.getElementById("myDiv");
    div.style.backgroundColor = "lightgreen";
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.border = "2px solid";
}

createDiv();

const myDiv = document.getElementById("myDiv");
myDiv.addEventListener("mouseover", () => myDiv.style.backgroundColor = "red");
myDiv.addEventListener("mouseout", () => myDiv.style.backgroundColor = "lightgreen");