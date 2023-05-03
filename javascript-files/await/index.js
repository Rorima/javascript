async function loadFile() {
    const promise = new Promise((resolve, reject) => {
        let fileLoaded = false;

        if (fileLoaded) {
            resolve("File loaded!");
        } else {
            reject("File not loaded!");
        }
    });

    try {
        console.log(await promise)
    } catch (error) {
        console.log(error);
    }
    
}

loadFile()