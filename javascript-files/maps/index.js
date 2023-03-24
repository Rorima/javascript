var values = "";
function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

store.set("hat", 40);
store.delete("hat");
customPrint(store.has("hat"));

store.forEach((v, k) => {
    customPrint(`Key: ${k}, value: $${v}`);
});

let shoppingCart = 0
shoppingCart = store.get("t-shirt");
shoppingCart += store.get("underwear");
customPrint(`Total in your cart: $${shoppingCart}.`);