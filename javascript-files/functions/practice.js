var values = "";

function customPrint(value)
{
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values;
    
}

customPrint("Hello World!");
customPrint("Can I do a line break?");
customPrint("Can I keep on doing that?");
customPrint(1 + 1);
customPrint("Now I don't need to keep opening the console anymore!!! Yaaaay!!!");

for(let i = 0; i < 10; i++){
    customPrint(i);
}

customPrint("Let me keep on printing just to test something");