//show error msg

let button = document.getElementById("btn");
function showErrorMsg() {
  let cardInput = document.getElementById("card");
  let dateMonthInput = document.getElementById("date");
  let dateYearInput = document.getElementById("date-YY");
  let cvcInput = document.getElementById("cvc");

  //   alert("hi error");

  if ((dateMonthInput.value = null)) {
    dateMonthInput.classList.add("show-error");
  }
}

// button.addEventListener("click", showErrorMsg());
