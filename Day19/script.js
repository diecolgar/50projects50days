
hourshand = document.querySelector('.hourshand');
minuteshand = document.querySelector('.minuteshand');
secondshand = document.querySelector('.secondshand');

digitaltext = document.querySelector('.digital')
datetext = document.querySelector('.date')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function update_clock() {

    let date = new Date();

    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let weekday = days[date.getDay()];
    let day = date.getDate();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    console.log(second)

    let second_deg = (second)*6 + 180;
    let minute_deg = ((minute)*6 + 180) + second_deg/360;
    let hour_deg = ((hour - 12)*30 + 180) + minute_deg/360;

    hourshand.style.transform = `rotate(${hour_deg}deg)`
    minuteshand.style.transform = `rotate(${minute_deg}deg)`
    secondshand.style.transform = `rotate(${second_deg}deg)`

    second == 0 ? secondshand.style.transition = 'transform 0s' : secondshand.style.transition = 'transform 0.2s'
    minute == 0 ? minuteshand.style.transition = 'transform 0s' : minuteshand.style.transition = 'transform 0.2s'
    hour == 0 ? hourshand.style.transition = 'transform 0s' : hourshand.style.transition = 'transform 0.2s'



    if(hour > 12) {
        if(minute <10) {
            digitaltext.innerHTML = `${hour - 12}:0${minute} PM`
        }
        if(minute >=10) {
            digitaltext.innerHTML = `${hour - 12}:${minute} PM`
        }
    } else {
        digitaltext.innerHTML = `(${hour}) AM`
    }

    datetext.innerHTML = `${weekday}, ${month} ${day}`
}

setInterval(update_clock, 1000)