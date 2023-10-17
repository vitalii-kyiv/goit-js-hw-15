const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
span.style.fontSize = input.value + "px";
function handleRange(evt) {
  const spanFontSize = evt.currentTarget.value + "px";
  span.style.fontSize = spanFontSize;
}

input.addEventListener("input", handleRange);
