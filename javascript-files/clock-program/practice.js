/*
Trying to reproduce what I studied without looking
*/
const demo = document.getElementById("demo");

function clock() {
    let date = new Date();
    demo.innerHTML = formatDate(date);

    function formatDate(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";
        
        hours = toNormalTime(hours);
        hours = formatTime(hours);
        minutes = formatTime(minutes);
        seconds = formatTime(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }

    function formatTime(time) {
        time = time.toString()
        return time.length < 2 ? ("0" + time) : time;
    }

    function toNormalTime(hours) {
        return (hours % 12) || 12;
    }
}

setInterval(clock, 1000);
