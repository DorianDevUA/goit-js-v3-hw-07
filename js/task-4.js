const refs = {
  loginForm: document.querySelector('.login-form'),
};

const onLoginFormSubmit = evt => {
  evt.preventDefault();

  const form = evt.currentTarget;
  const { email, password } = form.elements;

  const trimmedEmail = email.value.trim();
  const trimmedPassword = password.value.trim();

  if (!trimmedEmail || !trimmedPassword) {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: trimmedEmail,
    password: trimmedPassword,
  };
  console.log(formData);

  form.reset();
};

refs.loginForm.addEventListener('submit', onLoginFormSubmit);
