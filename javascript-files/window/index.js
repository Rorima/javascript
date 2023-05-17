console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
console.log(window.scrollX);
console.log(window.scrollY);
console.log(window.location.href); // can be changed
console.log(window.location.hostname); // local IP address
console.log(window.location.pathname);

const button = document.getElementById("button1");
button.addEventListener("click", () => {
    let age = window.prompt("Enter your age:");
    if (age < 18) {
        window.alert("You must be 18+ to be an adult");
        window.close();
    }
});