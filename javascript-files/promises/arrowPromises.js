let myPromise = new Promise((resolve, reject) => {
    const num = 2
    let result = Math.pow(num, 3);

    if (result === (Math.pow(num, 2))) {
        resolve("Number squared successfully.");
    } else {
        reject("Number was not square successfully.");
    }
});

myPromise.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
});

