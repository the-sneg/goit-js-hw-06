const input = document.querySelector("input");

input.addEventListener("blur", onInputBlur);

const dataSetInput = parseInt(input.dataset.length);

function onInputBlur(event) {
  if (event.target.value.length === dataSetInput) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
