var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

let date = new Date();

date = date.toLocaleString();
customPrint("Today's date: ")
customPrint(date);

date = new Date(0);
customPrint(" ")
customPrint("Epoch")
customPrint(date);

date = new Date(9999999999999);
customPrint(" ")
customPrint("9999999999999 seconds since the epoch:")
customPrint(date);

date = new Date(2023, 0, 1, 2, 3, 4, 5);
customPrint(" ")
customPrint("2023, 0, 1, 2, 3, 4, 5")
customPrint(date);

year = date.getFullYear();
customPrint("Year: " + year);
customPrint(" ")

month = date.getMonth(); // January is 0, February is 1, etc.
customPrint("Month: " + month);
customPrint(" ")

dayOfMonth = date.getDate();
customPrint("Day of the month: " + dayOfMonth);
customPrint(" ")

dayOfWeek = date.getDay(); // Sunday is 0, Monday is 1, etc.
customPrint("Day of the week: " + dayOfWeek);
customPrint(" ")

hours = date.getHours(); // between 0 and 23
customPrint("Hours: " + hours);
customPrint(" ")

minutes = date.getMinutes();
customPrint("Minutes: " + minutes);
customPrint(" ")

seconds = date.getSeconds();
customPrint("Seconds: " + seconds);
customPrint(" ")

milliseconds = date.getMilliseconds();
customPrint("Milliseconds: " + milliseconds);
customPrint(" ")

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth();
    let dayOfMonth = date.getDate();

    // Month is set to + 1 because 0 is January
    return `${dayOfMonth}/${month + 1}/${year}`;
}

function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "pm" : "am";

    /* 
    Modulus finds the remainder of any division.
    If the current time is 12, then the modulus would give 0, that's 
    why we're using the or (||), because it will return 12 instead of 0, 
    if the current time is 12.
    */
    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}

customPrint(formatDate(date));
customPrint(formatTime(date));