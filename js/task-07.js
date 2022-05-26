const refs = {
  input: document.querySelector("input"),
  span: document.querySelector("#text"),
};

refs.input.addEventListener("input", onInputRangeChange);

function onInputRangeChange() {
  const inputRangeSize = refs.input.value;
  refs.span.style.fontSize = `${inputRangeSize}px`;
}
