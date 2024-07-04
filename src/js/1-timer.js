import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');

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

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  daysElement.textContent = String(days).padStart(2, '0');
  hoursElement.textContent = String(hours).padStart(2, '0');
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');
}

function startTimer(targetDate) {
  const targetTime = new Date(targetDate).getTime();
  let countdownInterval;

  countdownInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const remainingTime = targetTime - currentTime;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      iziToast.success({
        title: 'Countdown Finished',
        message: 'The countdown timer has reached zero.',
      });
      startButton.disabled = false;
      datePicker.disabled = false;
    } else {
      const timeLeft = convertMs(remainingTime);
      updateTimerDisplay(timeLeft);
    }
  }, 1000);
}

iziToast.settings({
  position: 'topRight',
});

flatpickr(datePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (!selectedDate || selectedDate < new Date()) {
      iziToast.error({
        title: 'Invalid Date',
        message: 'Please choose a future date.',
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
});

// Вимкнути кнопку "Start" при завантаженні сторінки
startButton.disabled = true;

startButton.addEventListener('click', () => {
  const selectedDate = new Date(datePicker.value);
  startTimer(selectedDate);
  startButton.disabled = true;
  datePicker.disabled = true;
});
