var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

function createCheckbox() {
    let labelHTML = '<label for="myCheckBox">Subscribe</label>';
    let checkBoxHTML = '<input type="checkbox" id="myCheckBox">';

    document.getElementById("demo").innerHTML = labelHTML;
    document.getElementById("demo").innerHTML += checkBoxHTML;
}

function createSubmitButton() {
    let submitButton = '<button id="myButton">Submit</button>';
    
    document.getElementById("demo").innerHTML += '<br>';
    document.getElementById("demo").innerHTML += submitButton;
}

function createRadioButtons() {
    let visaLabel = '<label for="visaBtn">Visa</label>';
    let visaButton = '<input type="radio" name="card" id="visaBtn">';

    let masterLabel = '<label for="masterBtn">Master Card</label>';
    let masterButton = '<input type="radio" name="card" id="masterBtn">';

    let payLabel = '<label for="payBtn">Paypal</label>';
    let payButton = '<input type="radio" name="card" id="payBtn">';

    let visaList = [visaLabel, visaButton, '<br>'];
    let masterList = [masterLabel, masterButton, '<br>'];
    let payList = [payLabel, payButton, '<br>'];

    let itemsList = [visaList, masterList, payList];
    
    document.getElementById("demo").innerHTML += '<br><br>';

    for (let i = 0; i < itemsList.length; i++) {
        for (let j = 0; j < itemsList.length; j++) {
            document.getElementById("demo").innerHTML += itemsList[i][j];
        }
    }
}

function createSubmitButton2() {
    let submitButton = '<button id="myButton2">Submit 2</button>';
    
    document.getElementById("demo").innerHTML += '<br>';
    document.getElementById("demo").innerHTML += submitButton;
}

createCheckbox();
createSubmitButton();
createRadioButtons();
createSubmitButton2();

document.getElementById("myButton").onclick = function() {
    const isChecked = document.getElementById("myCheckBox").checked;
    if(isChecked == true) {
        customPrint("You're subscribed!");
    } else {
        customPrint("You're NOT subscribed!");
    }
}

document.getElementById("myButton2").onclick = function() {
    const v = document.getElementById("visaBtn").checked;
    const m = document.getElementById("masterBtn").checked;
    const p = document.getElementById("payBtn").checked;
    const radioButtons = [v, m, p];
    const cardNames = ["Visa", "Master Card", "PayPal"];
    
    for (let index = 0; index < radioButtons.length; index++) {
        if (radioButtons[index]) {
            customPrint("You're paying with " + cardNames[index] + ".");
            break;
        }
    }
}