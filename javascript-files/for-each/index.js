var values = "";

function customPrint(value) {
    values = values + "<br>" + value;
    document.getElementById("demo").innerHTML = values; 
}

let people = ['John', 'Joe', 'George'];

/*
people.forEach(person => {
    console.log("The name of the current person is: " + person);
});
*/

/*
people.forEach((current, index, arr) => {
    customPrint(`Current value: ${current}, Index: ${index},  Array: ${arr}`);
});
*/

let products = [
    {
        productName: "Smartphone",
        productValue: 249.99,
        descountPerc: 0.20
    },
    {
        productName: "Laptop",
        productValue: 529.00,
        descountPerc: 0.30
    },
    {
        productName: "TV",
        productValue: 479.99,
        descountPerc: 0.35
    }
];

/*
products.forEach(product => {
    customPrint(`Product: ${product.productName}`)
    customPrint(`Price: $${product.productValue}`)
    customPrint(" ")
});
*/

products.forEach(product => {
    product.discountValue = product.productValue * product.descountPerc;
});

products.forEach(product => {
    product.discountedPrice = product.productValue - product.discountValue;
});

products.forEach(product => {
    customPrint("Name: " + product.productName);
    customPrint("Full price: " + product.productValue);
    customPrint("Price after discount: " + product.discountedPrice.toFixed(2));
    customPrint(" ");
});