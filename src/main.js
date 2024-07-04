<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Timer</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/izitoast/dist/css/iziToast.min.css"
    />
    <link rel="stylesheet" href="./css/timer.css" />
  </head>
  <body>
    <a href="./index.html" class="timer-home">Go to home</a>

    <div class="input-wrapper">
      <input type="text" id="datetime-picker" />
      <button type="button" data-start>Start</button>
    </div>

    <div class="timer">
      <div class="field">
        <span class="value" data-days>00</span>
        <span class="label">Days</span>
      </div>
      <div class="field">
        <span class="value" data-hours>00</span>
        <span class="label">Hours</span>
      </div>
      <div class="field">
        <span class="value" data-minutes>00</span>
        <span class="label">Minutes</span>
      </div>
      <div class="field">
        <span class="value" data-seconds>00</span>
        <span class="label">Seconds</span>
      </div>
    </div>

    <script type="module" src="./js/1-timer.js"></script>
  </body>
</html>
