//clock
const clockDiv = document.querySelector('.clock');
const clock = clockDiv.querySelector('span');

function getTime(){
    const time = new Date();
    const hour = time.getHours();
    const mins = time.getMinutes();
    clock.innerText= `${hour < 10 ? `0${hour}`:hour}:${mins < 10 ?`0${mins}`:mins}`;
}

setInterval(getTime, 1000);