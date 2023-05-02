const promise = new Promise((resolve, reject) => {
    let serverResponded = true;

    if (serverResponded) {
        resolve("Server responded.");
    } else {
        reject("Server did not respond.");
    }
});

promise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
});
