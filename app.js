//show error msg

function showErrorMsg(event) {
  event.preventDefault();
  let nameInput = document.getElementById("name");
  let cardInput = document.getElementById("card");
  let dateMonthInput = document.getElementById("date");
  let dateYearInput = document.getElementById("date-YY");
  let cvcInput = document.getElementById("cvc");
  let cardFrontNumber = document.getElementById("card-front-number");
  let cardFrontName = document.getElementById("name-on-card");

  let cardFrontMonth = document.getElementById("mm-on-card");
  let cardFrontYear = document.getElementById("yy-on-card");
  let cardBackCvc = document.getElementById("cvc-back");

  let box1 = document.querySelector(".line2");
  let box2 = document.querySelector(".card-info-input-1");
  let box3 = document.querySelector(".card-info-input-2");
  let box4 = document.querySelector(".card-info-box--2");

  //   alert("hi error");
  if (nameInput.value) {
    cardFrontName.innerHTML = nameInput.value;
  }
  if (cardInput.value) {
    cardFrontNumber.innerHTML = cardInput.value;
  } else {
    box1.classList.add("show-error");
  }
  if (dateMonthInput.value == 0) {
    box2.classList.add("show-error");
  } else {
    cardFrontMonth.innerHTML = dateMonthInput.value;
  }
  if (dateYearInput.value == 0) {
    box3.classList.add("show-error");
  } else {
    cardFrontYear.innerHTML = dateYearInput.value;
  }
  if (cvcInput.value == 0) {
    box4.classList.add("show-error");
  } else {
    cardBackCvc.innerHTML = cvcInput.value;
  }
}
let button = document.getElementById("btn");
button.addEventListener("click", showErrorMsg);
