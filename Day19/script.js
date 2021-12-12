
hourshand = document.querySelector('.hourshand');
minuteshand = document.querySelector('.minuteshand');
secondshand = document.querySelector('.secondshand');

digitaltext = document.querySelector('.digital')
datetext = document.querySelector('.date')

switcher = document.querySelector('.switcher')
moonsec = document.querySelector('.moonsec')

body = document.querySelector('body')

root = document.documentElement

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

    // console.log(second)

    let second_deg = (second)*6 + 180;
    let minute_deg = ((minute)*6 + 180) + second_deg/360;
    let hour_deg = ((hour - 12)*30 + 180) + minute_deg/360;

    hourshand.style.transform = `rotate(${hour_deg}deg)`
    minuteshand.style.transform = `rotate(${minute_deg}deg)`
    secondshand.style.transform = `rotate(${second_deg}deg)`


    // disable animation for 59 seconds to 0 seconds transition in order to avoid anti-clockwise motion
    second == 0 ? secondshand.style.transition = 'transform 0s' : secondshand.style.transition = 'transform 0.2s'
    minute == 0 ? minuteshand.style.transition = 'transform 0s' : minuteshand.style.transition = 'transform 0.2s'
    hour == 0 ? hourshand.style.transition = 'transform 0s' : hourshand.style.transition = 'transform 0.2s'

    // manual digital clock zero inclusion
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


switcher.addEventListener('click', () => {
    moonsec.classList.toggle('displaced')

    if(moonsec.classList.contains('displaced')) {
        root.style.setProperty('--dark', 'rgb(243, 243, 243)')
        root.style.setProperty('--light', 'rgb(31, 31, 31)')
    } else {
        root.style.setProperty('--dark', 'rgb(31, 31, 31)')
        root.style.setProperty('--light', 'rgb(243, 243, 243)')  
    }
})