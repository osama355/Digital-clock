function setTime() {
    var date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    sess = "PM";

    if (hour == 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        sess = "AM";
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }


    document.getElementById("display").innerText = hour;
    document.getElementById("mins").innerText = min;
    document.getElementById("seconds").innerText = sec;
    document.getElementById("session").innerText = sess;

    setTimeout(setTime, 1000);
}

setTime();

//setInterval(setTime, 1000)   we can also doing like this instead of setTimeout(setTime, 1000), which we used in above function.