(function () {
  const emailLogin = document.getElementById("e-mail");
  const passwordLogin = document.getElementById("pswLogin");
  const btnLogin = document.getElementById("btn-login");
  const loginForm = document.getElementById("loginForm");
  const notValidDataError = document.getElementById("notValidEmailPass");

  loginForm.addEventListener("input", function (e) {
    e.preventDefault();
    if (emailLogin.value.length === 0 || passwordLogin.value.length === 0) {
      notValidDataError.classList.add("hidden");
    }
  });
  btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      userManager.validateCredentials(emailLogin.value, passwordLogin.value)
    ) {
      location.hash = "menu-page";
      userManager.loginData = [emailLogin.value, passwordLogin.value];
    } else {
      notValidDataError.classList.remove("hidden");
    }
  });
})();
