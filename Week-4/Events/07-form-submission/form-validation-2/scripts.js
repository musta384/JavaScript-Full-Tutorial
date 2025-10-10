const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const usernameValue = username.value.trim();  // trim() to cutoff spaces
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // check if they have a value or not
  if (usernameValue === '') {
    // show error
    // add error class
    setErrorFor(username, 'Username cannot be blank');
  } else {
    // add success class
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  } else {
    setSuccessFor(password);
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password cannot be empty');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Password does not match');
  } else {
    setSuccessFor(password2);
  }

  // Show a success message 

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;  // .form-constrol (targetting inputs parent)
  const small = formControl.querySelector('small');  // bcs small is in form-control

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error'; // now, delete error and success class ffrom html
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}