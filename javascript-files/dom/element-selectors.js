/*
function createRadiobuttons() {
    let demo = '<input type="radio" name="fruits" value="apple" checked="checked">';
    demo += '<label for="apple">Apple</label><br>';
    demo += '<input type="radio" name="fruits" value="orange">';
    demo += '<label for="orange">Orange</label><br>';
    demo += '<input type="radio" name="fruits" value="banana">';
    demo += '<label for="banana">Banana</label><br>';

    document.getElementById("demo").innerHTML = demo;
}

createRadiobuttons();

let element = document.getElementById("playground");
element.style.backgroundColor = "darkgreen";

let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
    if (fruit.checked) {
        console.log(fruit.value);
    }
});
*/

/*
function createUnorderedList() {
    let demo = `
        <ul>
            <li>Carrots</li>
            <li>Potatoes</li>
            <li>Onions</li>
        </ul>
    `

    document.getElementById("demo").innerHTML = demo;
}

createUnorderedList();

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";
vegetables[1].style.backgroundColor = "lightblue";
vegetables[2].style.backgroundColor = "purple";
*/

/*
function createDeserts() {
    let html = `
        <div class="desserts">Ice cream</div>
        <div class="desserts">Cake</div>
        <div class="desserts">Pie</div>
    `;

    document.getElementById("demo").innerHTML = html;
}

createDeserts();

let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";
desserts[1].style.backgroundColor = "lightblue";
desserts[2].style.backgroundColor = "purple";
*/

/*
function createUnorderedList() {
    let demo = `
        <ul>
            <li>Carrots</li>
            <li>Potatoes</li>
            <li>Onions</li>
        </ul>
    `

    document.getElementById("demo").innerHTML = demo;
}

createUnorderedList();

let vegetable = document.querySelector("li");
vegetable.style.backgroundColor = "lightgreen";
*/

/*
function createDeserts() {
    let html = `
        <div class="desserts">Ice cream</div>
        <div class="desserts">Cake</div>
        <div class="desserts">Pie</div>
    `;

    document.getElementById("demo").innerHTML = html;
}

createDeserts();

let dessert = document.querySelector(".desserts");
dessert.style.backgroundColor = "lightgreen";
*/

/*
function createRadiobuttons() {
    let demo = '<input type="radio" name="fruits" value="apple" checked="checked">';
    demo += '<label for="apple">Apple</label><br>';
    demo += '<input type="radio" name="fruits" value="orange">';
    demo += '<label for="orange">Orange</label><br>';
    demo += '<input type="radio" name="fruits" value="banana">';
    demo += '<label for="banana">Banana</label><br>';

    document.getElementById("demo").innerHTML = demo;
}

createRadiobuttons();

let fruit = document.querySelector("[for]");
fruit.style.backgroundColor = "lightgreen";
*/

/*
function createRadiobuttons() {
    let demo = '<input type="radio" name="fruits" value="apple" checked="checked">';
    demo += '<label for="apple">Apple</label><br>';
    demo += '<input type="radio" name="fruits" value="orange">';
    demo += '<label for="orange">Orange</label><br>';
    demo += '<input type="radio" name="fruits" value="banana">';
    demo += '<label for="banana">Banana</label><br>';

    document.getElementById("demo").innerHTML = demo;
}

createRadiobuttons();

let element = document.querySelector("#playground");
element.style.backgroundColor = "darkgreen";
*/

function createRadiobuttons() {
    let demo = '<input type="radio" name="fruits" value="apple" checked="checked">';
    demo += '<label for="apple">Apple</label><br>';
    demo += '<input type="radio" name="fruits" value="orange">';
    demo += '<label for="orange">Orange</label><br>';
    demo += '<input type="radio" name="fruits" value="banana">';
    demo += '<label for="banana">Banana</label><br>';

    document.getElementById("demo").innerHTML = demo;
}

createRadiobuttons();

let element = document.querySelectorAll("[for]");
element.forEach(element => {
    element.style.backgroundColor = "darkgreen"
});