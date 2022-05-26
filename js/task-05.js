const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInput);

function onInput(event) {
  const result = event.target.value;

  refs.output.textContent = result;

  if (refs.output.textContent === "") {
    refs.output.textContent = "Anonymous";
  }
}
