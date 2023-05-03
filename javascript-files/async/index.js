const loadFile = new Promise((resolve, reject) => {

    let fileLoaded = false;

    if(fileLoaded) {
        resolve("File loaded!");
    } else {
        reject("File not loaded");
    }
})

loadFile.then(value => console.log(value))
        .catch(error => console.log(error));
