function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("button[data-create]");
console.log(createBtn);
const destroyBtn = document.querySelector("button[data-destroy]");
console.log(destroyBtn);
const numberInput = document.querySelector("input");
console.log(numberInput);
const div = document.querySelector("#boxes");

function handleInput(evt) {
  amount = evt.currentTarget.value;
}
numberInput.addEventListener("input", handleInput);

let amount;
createBtn.addEventListener("click", function () {
  createBoxes(amount); //
});

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
destroyBtn.addEventListener("click", destroyBoxes);
