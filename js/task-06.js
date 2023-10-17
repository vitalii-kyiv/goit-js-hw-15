const input = document.querySelector("#validation-input");
console.log(input);

function handleBlur(evt) {
  if (
    evt.currentTarget.value.length !==
    parseInt(input.getAttribute("data-length"))
  ) {
    input.classList.add("invalid");
    input.classList.replace("valid", "invalid");
  } else {
    input.classList.replace("invalid", "valid");
  }
}

input.addEventListener("blur", handleBlur);
