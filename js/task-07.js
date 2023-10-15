const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

function handleRange(evt) {
  const spanFontSize = evt.currentTarget.value + "px";
  span.style.fontSize = spanFontSize;
}

input.addEventListener("input", handleRange);
