var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

let userName = "Noah";
let userInbox = 0;

function login() {
    displayUserName();
    displayUserInbox();

    function displayUserName() {
        console.log(userName);
    }
    
    function displayUserInbox() {
        console.log(userInbox);
    }
}

login();
displayUserName();
displayUserInbox();