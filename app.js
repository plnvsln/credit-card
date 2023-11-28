//show error msg

function showErrorMsg(event) {
  event.preventDefault();
  let cardInput = document.getElementById("card");
  let dateMonthInput = document.getElementById("date");
  let dateYearInput = document.getElementById("date-YY");
  let cvcInput = document.getElementById("cvc");
  let box1 = document.querySelector(".line2");
  let box2 = document.querySelector(".card-info-input-1");
  let box3 = document.querySelector(".card-info-input-2");
  let box4 = document.querySelector(".card-info-box--2");
  //   alert("hi error");
  if (cardInput.value !== Number) {
    console.log("not number");
    box1.classList.add("show-error");
  }
  if (dateMonthInput.value == 0) {
    box2.classList.add("show-error");
  }
  if (dateYearInput.value == 0) {
    box3.classList.add("show-error");
  }
  if (cvcInput.value == 0) {
    box4.classList.add("show-error");
  }
}
let button = document.getElementById("btn");
button.addEventListener("click", showErrorMsg);
