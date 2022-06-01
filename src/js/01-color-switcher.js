const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body')
function getRandomHexColor() {
    body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let interv;
stop.disabled = true;
start.addEventListener('click', ()=>{
    start.disabled = true;
    stop.disabled = false;
    interv = setInterval(getRandomHexColor, 1000);
})
stop.addEventListener('click', ()=>{
    start.disabled = false;
    stop.disabled = true;
    clearInterval(interv);
})