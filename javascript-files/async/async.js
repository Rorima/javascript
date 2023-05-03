/*
async function loadFile() {
    let fileLoaded = true;

    if (fileLoaded) {
        return "File loaded!";
    } else {
        throw "File not loaded!";
    }
}

loadFile().then(value => console.log(value))
        .catch(error => console.log(error));
*/

function loadFile() {
    let fileLoaded = true;

    if (fileLoaded) {
        return Promise.resolve("File loaded");
    } else {
        return Promise.reject("File not loaded");
    }
}

loadFile().then(value => console.log(value))
        .catch(error => console.log(error));
