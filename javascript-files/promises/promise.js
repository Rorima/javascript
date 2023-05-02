function squareNumber(resolve, reject) {
    const num = 2
    let result = Math.pow(num, 3);

    if (result === (Math.pow(num, 2))) {
        resolve("Number squared successfully.");
    } else {
        reject("Number was not square successfully.");
    }
}

function displayResult(message) {
    console.log(message);
}

let myPromise = new Promise(squareNumber);
myPromise.then(displayResult).catch(displayResult);

