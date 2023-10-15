const form = document.querySelector(".login-form");
console.log(form);

function heandlerSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  if (!this.email.value.length || !this.password.value.length) {
    alert("Всі поля повинні бути заповнені!");
  } else {
    console.log(data);
    form.reset();
  }
}

form.addEventListener("submit", heandlerSubmit);
