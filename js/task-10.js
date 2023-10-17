function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const numberInput = document.querySelector("input");
const div = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const amount = numberInput.value;
  createBoxes(amount);
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  let boxSize = [];
  let startValue = 30;
  for (let i = 0; i < amount; i++) {
    boxSize.push(startValue);
    startValue += 10;
  }
  let markup = "";
  boxSize.forEach((item) => {
    markup += `<div style="width: ${item}px; height: ${item}px; background-color: ${getRandomHexColor()};"></div>`;
  });
  div.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  div.innerHTML = "";
}
