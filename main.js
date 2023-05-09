window.addEventListener("load", function () {
  const form = document.getElementById('form');
  const btnText = document.getElementById('button-text');
  const loader = document.getElementById('loader');
  const submitButton = document.querySelector('#submit-button');

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    btnText.classList.add('hide')
    loader.classList.remove('hide')
    submitButton.disabled = true

    const data = new FormData(form);
    const action = e.target.action;

    fetch(action, {
      method: 'POST',
      body: data,
    })
      .then(() => {
        alert("Тойда кездескенше!");
      })
      .finally(() => {
        btnText.classList.remove('hide')
        loader.classList.add('hide')
        submitButton.disabled = false
      })
  });

  const countDownDate = new Date('June 6, 2023 18:00:00').getTime();
  const dayEl = document.getElementById('js-days')
  const hoursEl = document.getElementById('js-hours')
  const minutesEl = document.getElementById('js-minutes')
  const secondsEl = document.getElementById('js-seconds')

  const daysContainer = document.querySelector('.days')
  const startedText = document.getElementById('started')

  const now = new Date().getTime();
  const distance = countDownDate - now;

  function getDate(distance) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days, hours, minutes, seconds
    }
  }

  const {days, hours, minutes, seconds} = getDate(distance)

  dayEl.innerHTML = days < 0 ? 0 : days
  hoursEl.innerHTML = hours < 0 ? 0 : hours
  minutesEl.innerHTML = minutes < 0 ? 0 : minutes
  secondsEl.innerHTML = seconds < 0 ? 0 : seconds

  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const {days, hours, minutes, seconds} = getDate(distance)

    dayEl.innerHTML = days < 0 ? 0 : days
    hoursEl.innerHTML = hours < 0 ? 0 : hours
    minutesEl.innerHTML = minutes < 0 ? 0 : minutes
    secondsEl.innerHTML = seconds < 0 ? 0 : seconds

    if (distance < 1) {
      clearInterval(x);
      daysContainer.classList.add('hide')
      startedText.classList.remove('hide')
    }
  }, 1000);
});
