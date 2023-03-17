var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

var callback = function() {
    customPrint("Done!");
}

function sum(a, b) {
    return a + b;
}

function useSum(func, a, b) {
    return func(a, b);
}

customPrint(useSum(sum, 2, 3));
setTimeout(callback, 5000);