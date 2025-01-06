const hour = document.querySelector('#hour')
const min = document.querySelector('#min')
const sec = document.querySelector('#sec')
const days = document.querySelectorAll('.day')
let currentDayIndex = 0

setInterval(() => {
    let date = new Date()
    let dHour = date.getHours()
    let dMinute = date.getMinutes()
    let dSec = date.getSeconds()

    hour.innerHTML = `${formatTime(dHour)}`
    min.innerHTML = `${formatTime(dMinute)}`
    sec.innerHTML = `${formatTime(dSec)}`
}, 1000)

function formatTime(time) {
    return time < 10 ? '0' + time : time
}

function updateDays() {
    const currentDayIndex = new Date().getDay();
    days.forEach((day, index) => {
        day.classList.toggle('active', index === currentDayIndex);
    });
}

updateDays();
setInterval(updateDays, 60000);