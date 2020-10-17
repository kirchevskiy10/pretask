let form = document.querySelector(".formRegistration");
let username = form.querySelector(".username");
let email = form.querySelector(".email");
let password = form.querySelector(".password");
let fields = form.querySelectorAll(".field");
let validMail = function (inputText) {
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.match(mailformat)) {
    return true;
  } else {
    return false;
  }
};
let generateError = function (text) {
  let smthError = document.createElement("div");
  smthError.className = "smthError";
  smthError.style.color = "red";
  smthError.innerHTML = text;
  return smthError;
};
let removeValidation = function () {
  let smthErrors = form.querySelectorAll(".smthError");
  for (let i = 0; i < smthErrors.length; i++) {
    smthErrors[i].remove();
  }
};
let checkFields = function () {
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log("field is blank", fields[i]);
      let smthError = generateError("input values");
      form[i].parentElement.insertBefore(smthError, fields[i].nextSibling);
    }
  }
};
let checkErrors = function () {
  let smthErrors = form.querySelectorAll(".smthError");
  if (smthErrors.length == 0) return true;
  else return false;
};
window.onload = function () {
  let button = document.getElementById("clickButton");
  let body = document.getElementsByTagName("body")[0];
  let buttonClick = document.getElementById("clickButton");
  let formReg = document.getElementById("formReg");
  let okButton = document.getElementById("okButton");
  let colors = [
    "	#FFDAB9",
    "#FFEFD5",
    "#E6E6FA",
    "#6495ED",
    "	#E0FFFF",
    "#5F9EA0",
    "#D8BFD8",
    "	#FA8072",
    "#FFAACC",
    "#B0C4DE",
    "#E9967A",
    "	#D8BFD8",
    "	#6A5ACD",
    "	#8FBC8F",
    "#20B2AA",
    "	#778899",
  ];
  button.onclick = function () {
    let stepColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = stepColor;
    buttonClick.style.backgroundColor = stepColor;
    okButton.style.backgroundColor = stepColor;
    formReg.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  };
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  removeValidation();
  checkFields();

  if (!validMail(email.value)) {
    let smthError = generateError("It's not a email");
    email.parentElement.insertBefore(smthError, email.nextSibling);
  }

  if (checkErrors()) {
    let newUser = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    let jsonNewUser = JSON.stringify(newUser);
    let output = document.getElementById("output");
    output.innerHTML = "Post: ";
    output.innerHTML += jsonNewUser;
  }

});
