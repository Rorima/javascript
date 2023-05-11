function createHTML() {
    const html = `
        <ul id="fruits">
            <li>Apple</li>
            <li>Orange</li>
            <li>Banana</li>
        </ul>
    `

    document.getElementById("demo").innerHTML = html;
}

createHTML();

const h1Tag = document.createElement("h1");
h1Tag.textContent = "Title of the Page";
document.body.append(h1Tag);

const myList = document.querySelector("#fruits");
const listItem = document.createElement("li");
listItem.textContent = "Mango";

myList.append(listItem);
// myList.prepend(listItem); // add at the beginning

myList.insertBefore(listItem, myList.getElementsByTagName("li")[3]);