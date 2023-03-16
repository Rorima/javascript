var values = "";

function customPrint(value)
{
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

function useMethods(modifiedString, methodName) {
    customPrint(`${methodName} method:`);
    customPrint("Modified string: " + modifiedString);
    customPrint(" ");
}

let userName = "My Name";
customPrint("String: " + userName + "<br>")

useMethods(userName.length, "length");
useMethods(userName.charAt(0), "charAt(0)");
useMethods(userName.indexOf('a'), "indexOf('a')");
useMethods(userName.lastIndexOf('m'), "lastIndexOf('m')");
useMethods(userName.trim(), "trim");
useMethods(userName.toUpperCase(), "toUpperCase");
useMethods(userName.toLowerCase(), "toLowerCase");
useMethods("This is ".concat(userName), "concat");
useMethods(userName.replace("My", "Your"), "replace");
useMethods(userName.replaceAll('a', 'o'), "replaceAll");
useMethods(userName.slice(3), "slice");
useMethods(userName.padStart(10, "#"), "padStart");
useMethods(userName.padEnd(10, '#'), "padEnd");
useMethods(userName.split(""), "split");
