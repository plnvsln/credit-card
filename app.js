//show error msg

function submissionMsg() {
  let form = document.getElementById("form");
  // alert("Thank you!");
  form.innerHTML =
    "  <img class='success-img' src='/images/check-mark.png'  > <h1> Thank you !</h1> <p class='success-msg'>We've added your card details. </p> <button>Continue</button>";
}

function showErrorMsg(event) {
  event.preventDefault();
  let nameInput = document.getElementById("name").value;
  let cardInput = document.getElementById("card").value;
  let dateMonthInput = document.getElementById("date").value;
  let dateYearInput = document.getElementById("date-YY").value;
  let cvcInput = document.getElementById("cvc").value;
  let cardFrontNumber = document.getElementById("card-front-number");
  let cardFrontName = document.getElementById("name-on-card");

  let cardFrontMonth = document.getElementById("mm-on-card");
  let cardFrontYear = document.getElementById("yy-on-card");
  let cardBackCvc = document.getElementById("cvc-back");

  let box0 = document.querySelector(".line1");
  let box1 = document.querySelector(".line2");
  let box2 = document.querySelector(".card-info-input-1");
  let box3 = document.querySelector(".card-info-input-2");
  let box4 = document.querySelector(".card-info-box--2");

  //   alert("hi error");
  if (nameInput) {
    cardFrontName.innerHTML = nameInput;
  } else {
    box0.classList.add("show-error");
  }

  if (cardInput) {
    cardFrontNumber.innerHTML = cardInput;
  } else {
    box1.classList.add("show-error");
  }
  if (dateMonthInput == 0) {
    box2.classList.add("show-error");
  } else {
    cardFrontMonth.innerHTML = dateMonthInput;
  }
  if (dateYearInput == 0) {
    box3.classList.add("show-error");
  } else {
    cardFrontYear.innerHTML = dateYearInput;
  }
  if (cvcInput == 0) {
    box4.classList.add("show-error");
  } else {
    cardBackCvc.innerHTML = cvcInput;
  }
  if (nameInput && cardInput && dateMonthInput && dateYearInput && cvcInput) {
    submissionMsg();
  }
}
let button = document.getElementById("btn");
button.addEventListener("click", showErrorMsg);
