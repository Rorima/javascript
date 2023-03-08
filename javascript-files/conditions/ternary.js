var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

let age = 18;

age >= 18 ? customPrint("You may enter!") : customPrint("You may not enter!");