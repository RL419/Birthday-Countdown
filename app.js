const birthday_month = 3; // 0 is January
const birthday_day = 12;

const htmlDays = document.getElementById('days')
const htmlHours = document.getElementById('hours')
const htmlMinutes = document.getElementById('minutes')
const htmlSeconds = document.getElementById('seconds')

function addZero(time) {
    return time < 10 ? '0' + time : time;
}

setInterval(updateCountdown, 1000)
function updateCountdown() {
    const currTime = new Date();
    let year;

    if (currTime.getTime() > new Date(currTime.getFullYear(), birthday_month, birthday_day).getTime()) {
        year = currTime.getFullYear() + 1
    } else {
        year = currTime.getFullYear()
    }

    const birthdate = new Date(year, birthday_month, birthday_day);

    let nextBDay = Math.floor((birthdate.getTime() - currTime.getTime())/1000);

    const seconds = nextBDay % 60;
    nextBDay = (nextBDay - seconds) / 60;

    const minutes = nextBDay % 60;
    nextBDay = (nextBDay - minutes) / 60;

    const hours = nextBDay % 24;
    nextBDay = (nextBDay - hours) / 24;

    const days = nextBDay;

    htmlDays.innerHTML = days
    htmlHours.innerHTML = addZero(hours)
    htmlMinutes.innerHTML = addZero(minutes)
    htmlSeconds.innerHTML = addZero(seconds)
}