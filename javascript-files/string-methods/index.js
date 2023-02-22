var values = "";

function customPrint(value)
{
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

let userName = "My Name";
customPrint("String: " + userName);
customPrint(" ");

customPrint("String length: " + userName.length);
customPrint("First character: " + userName.charAt(0));
customPrint("First A: " + userName.indexOf('a'));
customPrint("Last A: " + userName.lastIndexOf('a'));
customPrint("Trimmed string: " + userName.trim());
customPrint("Upper case string: " + userName.toUpperCase());
customPrint("Lower case string: " + userName.toLowerCase());

let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-"," ");
customPrint(phoneNumber);