var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

document.getElementById("button1").onclick = login();

function login() {
    let userName = "Job";
    let userInbox = 1;

    function alertUser() {
        alert(`Hello, ${userName}! You have ${userInbox} new messages!`);
        userInbox = 0;
    }
    return alertUser;
}