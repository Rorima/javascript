function addImage() {
    const demo = document.querySelector("#demo");
    
    demo.innerHTML = `<img id="myImage" src="show-hide-elements/Planta.png" alt="plant picture" width="200">`;
}

addImage();

const button1 = document.querySelector("#button1");
const myImage = document.querySelector("#myImage");

button1.addEventListener("click", () => {
    console.log(myImage.style);
    if (myImage.style.visibility == "hidden") {
        myImage.style.visibility = "visible";
    } else {
        myImage.style.visibility = "hidden";
    }
});
