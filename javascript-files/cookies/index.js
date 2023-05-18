console.log(navigator.cookieEnabled);

function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();

    document.cookie = `${name}=${value}; ${expires};`;
    
    "firstName=SpongeBob; expires=Sun, 1 January 2000 12:00:00 UTC;";
}

function deleteCookie(name) {
    setCookie(name, null, null);
}

function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        if(element.indexOf(name) == 0) {
            result = element.substring(name.length + 1);
        }
    });

    return result;
}

console.log(getCookie("lastName"));
