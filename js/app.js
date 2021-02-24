const form = document.querySelector('.form');
const tooltipFirst = document.querySelector('.tooltip-first');
const tooltipLast = document.querySelector('.tooltip-last');
const tooltipEmail = document.querySelector('.tooltip-email');
const tooltipPassword = document.querySelector('.tooltip-password');
const border = '1px solid hsl(246, 25%, 77%)';
const borderError = '2px solid hsl(0, 100%, 74%)';
const color = 'hsl(249, 10%, 26%)';
const colorError = 'hsl(0, 100%, 74%)';


form.addEventListener('submit', function (event) {
  event.preventDefault();
  const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  const firstName = form.firstname.value;
  const lastName = form.lastname.value;
  const email = form.email.value;
  const password = form.password.value;
  if (firstName.trim().length < 3) {
    tooltipFirst.style.display = 'block';
    form.firstname.style.border = borderError;
    form.firstname.style.color = colorError;
  } else {
    tooltipFirst.style.display = 'none';
    form.firstname.style.border = border;
    form.firstname.style.color = color;
  }
  if (lastName.trim().length === 0) {
    tooltipLast.style.display = 'block';
    form.lastname.style.border = borderError;
    form.lastname.style.color = colorError;
  } else {
    tooltipLast.style.display = 'none';
    form.lastname.style.border = border;
    form.lastname.style.color = color;
  }
  if (email.trim().length === 0 || !regexEmail.test(email)) {
    tooltipEmail.style.display = 'block';
    form.email.style.border = borderError;
    form.email.style.color = colorError;
  } else {
    tooltipEmail.style.display = 'none';
    form.email.style.border = border;
    form.email.style.color = color;
  }
  if (password.trim().length < 5) {
    tooltipPassword.style.display = 'block';
    form.password.style.border = borderError;
    form.password.style.color = colorError;
  } else {
    tooltipPassword.style.display = 'none';
    form.password.style.border = border;
    form.password.style.color = color;
  }
  if (
    firstName.trim().length !== 0 &&
    lastName.trim().length !== 0 &&
    email.trim().length !== 0 &&
    regexEmail.test(email) &&
    password.trim().length !== 0
  ) {
    form.reset();
  }
});
