function createHTML() {
    const D = document.getElementById("demo");
    D.innerHTML += '<p>Select a fruit from the list:</p>';
    D.innerHTML += 
    `<select id="mySelect">
        <option value="Select">Select</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Avocado">Avocado</option>
        <option value="Orange">Orange</option>
    </select>`;
}

createHTML();

document.getElementById("mySelect").onchange = function() {
    let val = document.getElementById("mySelect").value;
    if (val != "Select") {
        document.getElementById("demo").innerHTML += `<br>You chose ${val}.`;
    }
}