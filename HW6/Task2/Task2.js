window.addEventListener("load", function () {
  document.querySelector(".btn-submit").addEventListener("click", function (e) {
    e.preventDefault();
    const value = document.querySelector(".options").value;
    const result = document.querySelector("#result");
    const cars = [
      {
        model: "Volvo XC60",
        topSpeed: 220,
      },
      {
        model: "Mercedes SLR McLaren",
        topSpeed: 315,
      },
      {
        model: "BMW M4 GTS",
        topSpeed: 305,
      },
      {
        model: "A7 3.0 TDI quattro",
        topSpeed: 250,
      },
    ];
    const currentModel = cars.find((el) => el.model === value);
    const negComparison = cars
      .filter((el) => el.topSpeed > currentModel.topSpeed)
      .map((el, i) => `${i + 1}). ${el.model}`);
    const posComparison = cars
      .filter((el) => el.topSpeed < currentModel.topSpeed)
      .map((el, i) => `${i + 1}). ${el.model}`);

    result.textContent = `${value} top speed is ${
      currentModel.topSpeed
    } kmph. It is slower than: ${
      negComparison.length > 0 ? negComparison.join(", ") : "none"
    } and faster than: ${
      posComparison.length > 0 ? posComparison.join(", ") : "none"
    }`;
  });
});
