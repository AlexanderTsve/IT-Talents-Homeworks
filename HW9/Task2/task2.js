(function () {
  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    const div = document.getElementById("fox-images");
    div.innerHTML = "";
    Promise.all([
      fetch("https://randomfox.ca/floof/"),
      fetch("https://randomfox.ca/floof/"),
      fetch("https://randomfox.ca/floof/"),
      fetch("https://randomfox.ca/floof/"),
      fetch("https://randomfox.ca/floof/"),
    ])
      .then((data) => {
        const mappedData = data.map((response) => response.json());
        mappedData.forEach((obj) => {
          obj.then((img) => {
            const newImageEl = document.createElement("img");
            newImageEl.src = `${img.link}`;
            div.append(newImageEl);
          });
        });
      })
      .catch(() => {
        const errorPara = document.createElement("p");
        errorPara.innerText = "Something went wrong...";
        div.append(errorPara);
      });
  });
})();
