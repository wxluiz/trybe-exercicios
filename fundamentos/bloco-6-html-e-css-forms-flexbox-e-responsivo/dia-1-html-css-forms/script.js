function interrupt(event) {
    event.preventDefault();
    const validacao = textInputValidation();
    if (validacao === false) {
        alert('Dados Inválidos');
    }
    else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }
  window.onload = function () {
    const btnSubmit = document.querySelector('#btn-submit');
    btnSubmit.addEventListener('click', interrupt);
    const checkbox = document.querySelector('#autoriza');
    checkbox.addEventListener('change', enableButton);
  };

  function enableButton() {
    const btnSubmit = document.querySelector('#btn-submit');
    const checkbox = document.querySelector('#autoriza');
    btnSubmit.disabled = !checkbox.checked;
  }



function textInputValidation() {
    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#nomeCompleto').value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector('#motivo').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
  }