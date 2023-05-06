let loginController = (function () {
  const loginPageErrorEl = document.getElementById("login-error");

  function removeLoginError() {
    loginPageErrorEl.innerHTML = "";
  }
  class LoginController {
    loginForm = document.getElementById("loginForm");

    constructor() {
      this.loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const currentUsername = this.elements[0].value;
        const currentPassword = this.elements[1].value;

        this.elements[0].addEventListener("input", function () {
          removeLoginError();
        });

        this.elements[1].addEventListener("input", function () {
          removeLoginError();
        });

        if (!localStorage.getItem(ACTIVE_USER_KEY)) {
          login(currentUsername, currentPassword).then((resp) => {
            if (resp.ok) {
              const data = resp.json();
              data.then((obj) => {
                localStorage.setItem(ACTIVE_USER_KEY, obj.sessionId);
                localStorage.setItem(ACTIVE_USER_NAME, currentUsername);
                location.hash = "#homePage";
                welcoming(currentUsername);
              });
            } else {
              const errorPara = document.createElement("p");
              errorPara.innerText = "Wrong  credentials!";
              errorPara.classList.add("error-message");
              loginPageErrorEl.append(errorPara);
            }
          });
          loginForm.reset();
        }
      });
    }
  }

  return new LoginController();
})();
