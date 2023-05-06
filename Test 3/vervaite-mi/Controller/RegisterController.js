let registerController = (function () {
  const registerErrorEl = document.getElementById("register-error");

  function removeError(btn) {
    registerErrorEl.innerHTML = "";
    btn.removeAttribute("disabled");
  }

  function createErrorEl(text, btn) {
    btn.setAttribute("disabled", "");
    const errorPara = document.createElement("p");
    errorPara.innerText = `${text}`;
    errorPara.classList.add("error-message");
    registerErrorEl.append(errorPara);
  }
  class RegisterController {
    registerForm = document.getElementById("registerForm");

    constructor() {
      this.registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = this.elements[0].value;
        const password = this.elements[1].value;
        const confirmedPassword = this.elements[2].value;
        const btnReg = this.elements[3];

        this.elements[0].addEventListener("input", function () {
          removeError(btnReg);
        });

        this.elements[1].addEventListener("input", function () {
          removeError(btnReg);
        });

        this.elements[2].addEventListener("input", function () {
          removeError(btnReg);
        });

        try {
          addUser(username, password, confirmedPassword).then((response) => {
            if (!response.ok) {
              createErrorEl("The user name is already taken!", btnReg);
            } else {
              removeError(btnReg);
              location.hash = "loginPage";
            }
          });
        } catch (e) {
          createErrorEl(e, btnReg);
        } finally {
          registerForm.reset();
        }
      });
    }
  }

  return new RegisterController();
})();
