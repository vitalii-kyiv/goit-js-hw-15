const input = document.querySelector("#validation-input");
console.log(input);

function handleBlur(evt) {
  if (
    evt.currentTarget.value.length ===
    parseInt(input.getAttribute("data-length"))
  ) {
    input.classList.add("valid");
    input.classList.replace("invalid", "valid");
  } else {
    input.classList.replace("valid", "invalid");
  }
}

input.addEventListener("blur", handleBlur);
