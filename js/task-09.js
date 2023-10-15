function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.body;

function handleColor() {
  console.log("hello");
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
}

button.addEventListener("click", handleColor);
