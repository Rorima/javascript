const demo = document.getElementById("demo");

function update() {
    let date = new Date();
    demo.innerHTML = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
        
        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }

    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}

update();
setInterval(update, 1000);