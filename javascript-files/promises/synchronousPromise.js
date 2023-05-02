function successCallback(operation) {
    console.log(`The following operation was successful: ${operation}.`);
}

function errorCallback(error) {
    console.log(`The following error occured: ${error}`);
}

function squareNumber(resolve, reject) {
    const num = 3
    let result = Math.pow(num, 2);

    if (result === (Math.pow(num, 2))) {
        resolve("Square exponentiation");
    } else {
        reject("Not square exponentiation");
    }
}

squareNumber(successCallback, errorCallback);