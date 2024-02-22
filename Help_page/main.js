const formButton = document.querySelector(".form-submit");
const form = document.querySelector(".form");
const errorElement = document.querySelector(".error");
const textAreaElement = document.querySelector("#message");
const errorRadio = document.querySelector(".error-radio");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = form.querySelector("#name").value;
  const email = form.querySelector("#email").value;
  const message = form.querySelector("#message").value;
  const phone = form.querySelector("#phone").value;

  const userInput = {
    "First Name": userName,
    "Email address": email,
    Phone: phone,
    Message: message,
    Category: showCategory(),
  };
  if (message.length < 30) {
    errorElement.textContent = "Message should be at least 30 characters";
    textAreaElement.style.backgroundColor = "#f4bbbb";
    return;
  }
  if (selectedOption === "") {
    errorRadio.textContent = "You have to pick a category";
    return;
  }

  let userInputs = JSON.parse(localStorage.getItem("UserInputs")) || [];
  userInputs.push(userInput);
  localStorage.setItem("UserInputs", JSON.stringify(userInputs));
  console.log(userInputs);
  form.reset();
});

function showCategory() {
  const radioButtons = form.querySelectorAll('input[type="radio"][name="category"]');
  for (i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedOption = radioButtons[i].value;
      break;
    } else selectedOption = "";
  }
  return selectedOption;
}
function retrieveUserInput() {
  return JSON.parse(localStorage.getItem("UserInputs"));
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
const emailInput = document.querySelector("#email");
emailInput.addEventListener("input", function () {
  const email = emailInput.value.trim();
  if (!email || validateEmail(email)) {
    errorElement.textContent = "";
  } else {
    errorElement.textContent = "Email is not valid";
  }
});
