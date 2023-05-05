const change = 10;
const image = document.querySelector("img");
window.addEventListener("load", function () {
  image.style.position = "absolute";
  image.style.top = 0;
  image.style.left = 0;
});
window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown" && parseFloat(image.style.top) < 640) {
    image.style.top = parseFloat(image.style.top) + change + "px";
  } else if (e.key === "ArrowUp" && parseFloat(image.style.top) > 0) {
    image.style.top = parseFloat(image.style.top) - change + "px";
  } else if (e.key === "ArrowLeft" && parseFloat(image.style.left) > 0) {
    image.style.left = parseFloat(image.style.left) - change + "px";
  } else if (e.key === "ArrowRight" && parseFloat(image.style.left) < 1410) {
    image.style.left = parseFloat(image.style.left) + change + "px";
  }
});
