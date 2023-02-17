let count = 0;

function updateCounter(count){
    document.getElementById("countLabel").innerHTML = count;

    if(count == 100){
        congratulations();
    }
}

function congratulations(){
    document.getElementById("countLabel").innerHTML = "Congratulations! You've just wasted 100 clicks!";
}

document.getElementById("increaseButton").onclick = function(){
    count +=1;
    updateCounter(count);
}

document.getElementById("decreaseButton").onclick = function(){
    count -= 1;
    updateCounter(count);
}

document.getElementById("resetButton").onclick = function(){
    count = 0;
    updateCounter(count);
}
