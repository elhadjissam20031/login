var userEmailSignin = document.getElementById("userEmailSignin");
var userPasswordSignin = document.getElementById("userPasswordSignin");
var btnLogin = document.getElementById("btnLogin");
var userName = document.getElementById("userName");
var userEmailSignup = document.getElementById("userEmailSignup");
var userPasswordSignup = document.getElementById("userPasswordSignup");
var btnSignup = document.getElementById("btnSignup");
var dd = document.getElementById("dddddd");
var showError = document.getElementById("showError");
var showValid = document.getElementById("showValid");
var showResult = document.getElementById("showResult");
var showInvalid = document.getElementById("showInvalid");
var showRequired = document.getElementById("showRequired");
var regexName = /^[a-zA-Z ]{3,13}$/;
var regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
var inputsObj = {};
function validateSignup() {
  showResult.style.display = "block";

  if (
    regexName.test(userName.value) === true &&
    regexEmail.test(userEmailSignup.value) === true &&
    regexPassword.test(userPasswordSignup.value) === true
  ) {
    dd.style.backgroundColor = "green";
    showValid.classList.add("isValid");
    inputsObj.nameUser = userName.value;
    inputsObj.emailUser = userEmailSignup.value;
    inputsObj.passwordUser = userPasswordSignup.value;

    var couvertedObject = JSON.stringify(inputsObj);
    localStorage.setItem("inputsUsers", couvertedObject);
  }
  if (
    regexName.test(userName.value) === false ||
    regexEmail.test(userEmailSignup.value) === false ||
    regexPassword.test(userPasswordSignup.value) === false
  ) {
    dd.style.backgroundColor = "red";

    showError.classList.add("isError");
  }
}
var retrievedObject = localStorage.getItem("inputsUsers");
var getInputs = JSON.parse(retrievedObject);
function validateSignin() {
  showResult.style.display = "block";
  if (
    userEmailSignin.value != getInputs.emailUser ||
    userPasswordSignin.value != getInputs.passwordUser ||
    (userEmailSignin.value != getInputs.emailUser &&
      userPasswordSignin.value != getInputs.passwordUser)
  ) {
    showInvalid.style.display = "block";
  }

  if (
    userEmailSignin.value == "" ||
    userPasswordSignin.value == "" ||
    (userEmailSignin.value == "" && userPasswordSignin.value == "")
  ) {
    showRequired.style.display = "block";
  }

  if (
    userEmailSignin.value == getInputs.emailUser &&
    userPasswordSignin.value == getInputs.passwordUser
  ) {
    location.href = "home.html";
  }
}

//show name for user in home page

var userWelcome = document.getElementsByClassName("welcome-user")[0];
userWelcome.innerHTML = "Welcome " + getInputs.nameUser;
function logoutUser() {
  location.href = "index.html";
}
var btnLogout = document.getElementsByClassName("btnLogout")[0];
//show error result
