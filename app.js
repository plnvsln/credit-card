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

//credit cards checker
/*
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

function validateCred(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
      newArr.push(arr[i]);
    } else {
      //every other digit doubled
      let doubledDigit = arr[i] * 2;
      if (doubledDigit > 9) {
        doubledDigit -= 9;
      }
      newArr.push(doubledDigit);
    }
  }
  //3.Sum up all the digits in the credit card number.
  let sum = 0;
  for (let s = 0; s < newArr.length; s++) {
    sum += newArr[s];
  }
  if (sum % 10 == 0) {
    return true;
  } else {
    return false;
  }
}
//validateCred(valid1);

let invalidCardsArr = [];

function findInvalidCards(nestedArr) {
  const checkCards = nestedArr.filter((arrEl) => validateCred(arrEl));
  for (let i = 0; i < checkCards.length; i++) {
    if (checkCards[i] !== true) {
      invalidCardsArr.push(checkCards[i]);
    }
  }
  return invalidCardsArr;
}
findInvalidCards(batch);
 

function idInvalidCardCompanies(arr) {
  //takes invalidCardsArr and returns an array of companies.
  let invalidCompaniesArr = [];
  for (let i = 0; i < arr.length; i++) {
    let firstDigit = arr[i][0];
    if (firstDigit === 3) {
      invalidCompaniesArr.push("Amex");
    } else if (firstDigit === 4) {
      invalidCompaniesArr.push("Visa");
    } else if (firstDigit === 5) {
      invalidCompaniesArr.push("Mastercard");
    } else if (firstDigit === 6) {
      invalidCompaniesArr.push("Discover");
    } else {
      console.log(`“Company not found”`);
    }
  }

  function removeDuplicates(arr) {
    let resultCompaninesArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (resultCompaninesArr.indexOf(arr[i]) === -1) {
        resultCompaninesArr.push(arr[i]);
      }
    }
  //  console.log(resultCompaninesArr);
    return resultCompaninesArr;
  }
  removeDuplicates(invalidCompaniesArr);
}
idInvalidCardCompanies(invalidCardsArr);
*/
