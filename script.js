let alarmTime = null;
let alarmRang = false;

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").innerHTML =
        hours + ":" + minutes + ":" + seconds;

    if (alarmTime === hours + ":" + minutes && !alarmRang) {
        document.getElementById("alarmSound").play();
        alarmRang = true;
    }
}

function setAlarm() {
    alarmTime = document.getElementById("alarmTime").value;
    alarmRang = false;

    if (alarmTime === "") {
        alert("Select alarm time");
    }
}

setInterval(updateClock, 1000);
