(function () {
  let registerForm = document.getElementById("registerForm");
  let password = document.getElementById("pswReg");
  let confirmPassword = document.getElementById("psw-repeat");
  let userExistsError = document.getElementById("userExistsError");
  let passMismatchError = document.getElementById("passMismatchError");
  let formNotFilledInError = document.getElementById("formNotFilledInError");
  let registerBtn = document.querySelector(".registerbtn");
  let regUsername = document.getElementById("fname");
  let regEmail = document.getElementById("email");

  registerForm.addEventListener("input", function (e) {
    e.preventDefault();
    if (
      password.value.length === 0 ||
      confirmPassword.value.length === 0 ||
      regUsername.value.length === 0 ||
      regEmail.value.length === 0
    ) {
      formNotFilledInError.classList.add("hidden");
      userExistsError.classList.add("hidden");
      passMismatchError.classList.add("hidden");
    }
  });
  registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      password.value &&
      confirmPassword.value &&
      regUsername.value &&
      regEmail.value
    ) {
      if (password.value !== confirmPassword.value) {
        passMismatchError.classList.remove("hidden");
      } else {
        if (
          userManager.addUser(regUsername.value, regEmail.value, password.value)
        ) {
          location.hash = "login-page";
          userManager.addToStored();
        } else {
          userExistsError.classList.remove("hidden");
        }
      }
    } else {
      formNotFilledInError.classList.remove("hidden");
    }
  });
})();
