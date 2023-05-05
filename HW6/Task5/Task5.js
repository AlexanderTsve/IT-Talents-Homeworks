window.addEventListener("load", function () {
  document.getElementById("submit-btn").addEventListener("click", function (e) {
    e.preventDefault();
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;
    red = red < 0 || red > 255 ? 0 : red;
    green = green < 0 || green > 255 ? 0 : green;
    blue = blue < 0 || blue > 255 ? 0 : blue;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });
});
