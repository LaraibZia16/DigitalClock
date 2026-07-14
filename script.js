const clock = document.getElementById("clock");
const date = document.getElementById("date");
const greeting = document.getElementById("greeting");
const formatBtn = document.getElementById("formatBtn");

let is24Hour = false;

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let session = "AM";

    if (!is24Hour) {

        if (hours >= 12) {
            session = "PM";
        }

        if (hours > 12) {
            hours -= 12;
        }

        if (hours === 0) {
            hours = 12;
        }

        clock.innerHTML =
            `${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")} ${session}`;

    } else {

        clock.innerHTML =
            `${String(now.getHours()).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

    }

    const days = [
        "Sunday","Monday","Tuesday","Wednesday",
        "Thursday","Friday","Saturday"
    ];

    const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    date.innerHTML =
        `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    const currentHour = now.getHours();

    if (currentHour >= 0 && currentHour < 5) {
    greeting.innerHTML = "🌙 Good Night";
}
else if (currentHour >= 5 && currentHour < 12) {
    greeting.innerHTML = "🌅 Good Morning";
}
else if (currentHour >= 12 && currentHour < 17) {
    greeting.innerHTML = "☀️ Good Afternoon";
}
else if (currentHour >= 17 && currentHour < 21) {
    greeting.innerHTML = "🌇 Good Evening";
}
else {
    greeting.innerHTML = "🌙 Good Night";
}
}

formatBtn.addEventListener("click",()=>{

    is24Hour = !is24Hour;

    if(is24Hour){
        formatBtn.innerHTML = "Switch to 12 Hour";
    }
    else{
        formatBtn.innerHTML = "Switch to 24 Hour";
    }

    updateClock();

});

updateClock();

setInterval(updateClock,1000);