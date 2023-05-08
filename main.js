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
});
