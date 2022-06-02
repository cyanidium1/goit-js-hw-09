import flatpickr from "../../node_modules/flatpickr"
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
const date = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const qs = document.querySelector('#quickstart');
btn.disabled = true;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(dateStr) {
        if (dateStr[0] < options.defaultDate) {
            Notiflix.Notify.failure('going back to the future?');
        } else {
            btn.disabled = false;
        }
    },
  };
flatpickr(date, options);
const dayss = document.querySelector('[data-days]')
const hourss = document.querySelector('[data-hours]')
const mins = document.querySelector('[data-minutes]')
const secs = document.querySelector('[data-seconds]')
let delta;
function kek(){
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
        }
        if (minutes < 0) {
            hours -= 1;
            minutes = 59
        }
        if (hours < 0) {
            days -= 1;
            hours = 23;
        }
        console.log(`left ${seconds}, ${minutes}, ${hours}, ${days}`);
        secs.textContent = seconds;
        mins.textContent = minutes;
        hourss.textContent = hours;
        dayss.textContent = days;
    }, 1000);
    setTimeout(() => {
        console.log('obnulenie');
        Notiflix.Notify.success(
            'Fin!'
          );
        clearInterval(timerAction);
        secs.textContent = 0;
        mins.textContent = 0;
        hourss.textContent = 0;
        dayss.textContent = 0;
    }, delta+500);
    
}
qs.addEventListener('click', ()=>{
    delta = 10000;
    kek()
});
btn.addEventListener('click', ()=>{
    let setTime = (new Date(date.value)).getTime();
    let curTime = (new Date).getTime();
    delta = setTime - curTime;
    kek()
});