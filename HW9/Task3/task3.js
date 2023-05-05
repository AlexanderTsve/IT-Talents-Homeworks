(function () {
  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    const div = document.getElementById("dog-image");
    div.innerHTML = "";
    Promise.any([
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random"),
      fetch("https://dog.ceo/api/breeds/image/random"),
    ])
      .then((data) => {
        const obj = data.json();
        obj.then((img) => {
          const newImageEl = document.createElement("img");
          newImageEl.src = `${img.message}`;
          div.append(newImageEl);
        });
      })
      .catch(() => {
        const errorPara = document.createElement("p");
        errorPara.innerText = "Something went wrong...";
        div.append(errorPara);
      });
  });
})();
