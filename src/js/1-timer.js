import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";



const startBtn = document.querySelector("button")
const timePicker = document.querySelector("#datetime-picker");
startBtn.disabled = true;

let userSelectedDate;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        
        console.log(selectedDates[0]);
        if (selectedDates[0] < Date.now()) {
            iziToast.error({
        title: "Error",
        message: "Please choose a date in the future",
        position: "topRight",
        });
            return;
        }
        startBtn.disabled = false;
        userSelectedDate = selectedDates[0]
},
};

flatpickr(timePicker, options)
let intervalID;

startBtn.addEventListener("click", handleCountdown);

function handleCountdown(event) {
    intervalID = setInterval(() => {
    const currentTime = Date.now();
    const timeLeft = userSelectedDate - currentTime;
        if (timeLeft > 0) {
        updateTimerDisplay(timeLeft);
        startBtn.disabled = true;
        timePicker.setAttribute("disabled", "");
    } else if (timeLeft <= 0) {
        clearInterval(intervalID);
        timePicker.removeAttribute("disabled"); 
    }
    }, 1000)

}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    return { days, hours, minutes, seconds };
}
const addLeadingZero = value => String(value).padStart(2, '0');

function updateTimerDisplay(timeLeft) {
    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    const daysEl = document.querySelector("[data-days]");
    const hoursEl = document.querySelector("[data-hours]");
    const minutesEl = document.querySelector("[data-minutes]");
    const secondsEl = document.querySelector("[data-seconds]");

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
}



