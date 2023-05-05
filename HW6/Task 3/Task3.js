window.addEventListener("load", function () {
  document.querySelector("body").addEventListener("keydown", function (e) {
    const key = e.key;
    const code = e.code;
    document.getElementById(
      "key-pressed"
    ).textContent = `You have pressed ${key} with code ${code}.`;
  });
});
