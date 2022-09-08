function interrupt(event) {
    event.preventDefault();
  }
  window.onload = function () {
    const btnSubmit = document.querySelector('#btn-submit');
    btnSubmit.addEventListener('click', interrupt);
  };