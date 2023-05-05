window.addEventListener("load", function () {
  document.getElementById("submit-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const firstInput = document.getElementById("finput").value;
    const secondInput = document.getElementById("sinput").value;
    if (firstInput.length > 9 || firstInput.length < 3)
      document.getElementById("error-message-first").textContent =
        "Incorrect output! 😢";
    if (firstInput.length < 9 && firstInput.length > 3)
      document.getElementById("error-message-first").textContent =
        "Correct output! 🥳";
    if (secondInput.length > 9 || secondInput.length < 3)
      document.getElementById("error-message-second").textContent =
        "Incorrect output! 😢";
    if (secondInput.length < 9 && secondInput.length > 3)
      document.getElementById("error-message-second").textContent =
        "Correct output! 🥳";
  });
});
