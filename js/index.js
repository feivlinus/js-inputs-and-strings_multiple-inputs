/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

button.addEventListener("click", () => {
  if (firstInput.value.length != 0 && secondInput.value.length === 0) {
    secondInput.value = firstInput.value;
    return;
  }

  if (secondInput.value.length != 0 && firstInput.value == secondInput.value) {
    secondInput.value = firstInput.value.toUpperCase();
    return;
  }

  if (firstInput.value.length != 0 && secondInput.value.length != 0) {
    console.log("swtich it!");
    const firstValue = firstInput.value;
    const secondValue = secondInput.value;
    firstInput.value = secondValue;
    secondInput.value = firstValue;
  }
});
