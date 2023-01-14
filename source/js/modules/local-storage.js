const username = document.querySelector('[name=name]');
const phone = document.querySelector('[name=phone]');
const form = document.querySelector('#form');

form.addEventListener('submit', function (evt) {
  if (!username.value || !phone.value) {
    evt.preventDefault();
    document.classList.add('modal--error');
  } else {
    localStorage.setItem('username', username.value);
    localStorage.setItem('phone', phone.value);
  }
});
