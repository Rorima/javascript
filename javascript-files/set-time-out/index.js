let item = 'cryptocurrency';
let price = 399.99;

let msg1 = setTimeout(firstMessage, 3000, item, price);
let msg2 = setTimeout(secondMessage, 6000);
let msg3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price) {
    alert(`Buy this ${item} for $${price}!`);
}

function secondMessage() {
    alert(`This is not a scam!`);
}

function thirdMessage() {
    alert(`DO IT!`);
}

/*
setTimeout(() => {
    clearTimeout(msg1);
    clearTimeout(msg2);
    clearTimeout(msg3);
}, 2000);
*/