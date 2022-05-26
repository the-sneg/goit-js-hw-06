const form = document.querySelector("form");

const formData = {};

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Все поля должны быть заполнены!");
  } else {
    formData.name = email;
    formData.password = password;
    console.log("Form Data: ", formData);
    form.reset();
  }
}
