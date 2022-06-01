import flatpickr from "../../node_modules/flatpickr"
import "flatpickr/dist/flatpickr.min.css";
import { min } from "lodash";
const date = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(dateStr) {
      console.log(dateStr);
    },
  };
flatpickr(date, options);
const dayss = document.querySelector('[data-days]')
const hourss = document.querySelector('[data-hours]')
const mins = document.querySelector('[data-minutes]')
const secs = document.querySelector('[data-seconds]')
function kek(){
    let setTime = (new Date(date.value)).getTime();
    let curTime = (new Date).getTime();
    if (setTime < curTime) {
        alert('back to the future?');
        return `kek`
    }
    let delta = setTime - curTime;
    let seconds;
    let minutes;
    let hours;
    let days;
    function converter(delta){
        seconds = Math.round(delta/1000);
        minutes = Math.floor(seconds/60);
        seconds = seconds%60;
        hours = Math.floor(minutes/60);
        minutes = minutes%60;
        days = Math.floor(hours/24)
        hours = hours%24
    };
    converter(delta);
    const timerAction = setInterval(() => {
        seconds -= 1;
        if (seconds < 0) {
            minutes -= 1;
            seconds = 59;
            if (minutes < 0) {
                hours -= 1;
                minutes = 59
                if (hours < 0) {
                    days -= 1;
                    hours = 23;
                    if (days < 0) {
                        alert('fin!');
                        clearInterval(timerAction)
                    } 
                }
            }
        }
        console.log(`left ${seconds}, ${minutes}, ${hours}, ${days}`);
        secs.textContent = seconds;
        mins.textContent = minutes;
        hourss.textContent = hours;
        dayss.textContent = days;
    }, 1000);
}
btn.addEventListener('click', kek)