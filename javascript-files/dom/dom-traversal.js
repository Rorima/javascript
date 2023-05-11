function createHTML() {
    const html = `
        <ul id="fruits">
            <li>Apple</li>
            <li>Orange</li>
            <li>Banana</li>
        </ul>

        <ul id="vegetables">
            <li>Carrots</li>
            <li>Potatoes</li>
            <li>Onion</li>
        </ul>
        
        <ul id="desserts">
            <li>Ice cream</li>
            <li>Cake</li>
            <li>Pie</li>
        </ul>
    `;

    document.getElementById("demo").innerHTML = html;
}

createHTML();

let body = document.body;
let demoId = body.firstElementChild // <br> tag
            .nextElementSibling // another <br> tag
            .nextElementSibling // <div> tag
            .firstElementChild // demo id

let firstUL = demoId.firstElementChild;
let secondUL = firstUL.nextElementSibling;
let thirdUL = secondUL.nextElementSibling;

console.log(thirdUL);
secondUL.style.backgroundColor = "lightgreen";
secondUL.firstElementChild.nextElementSibling.style.backgroundColor = "red";

thirdUL.children[2].style.backgroundColor = "blue";

let childrenArray = Array.from(firstUL.children);
childrenArray.forEach(child => child.style.backgroundColor = "purple");