let c = 0;
let max = window.prompt("How many seconds?")
max = Number(max);

const counter = setInterval(() => {
    console.log("Seconds passed since execution: " + c);
    c += 1;
    if (c >= max) {
        clearInterval(counter);
    }
}, 1000);