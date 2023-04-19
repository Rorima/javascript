var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

/*
try {
    console.lag("testing");
} catch (error) {
    customPrint(error);
}
*/

try {
    let x = window.prompt("Enter a number:");
    x = Number(x);
    if (isNaN(x)) {
        throw `This is not a number!`
    }
    if(x == "") {
        throw `That was empty!`
    }
    console.log(`${x} is your number.`);
} catch (error) {
    console.log(error)
} finally {
    console.log("Final block.");
}