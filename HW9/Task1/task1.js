(function () {
  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    const div = document.getElementById("image");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        div.innerHTML = "";
        let result;
        if (data) {
          const image = document.createElement("img");
          image.src = data.message;
          result = image;
        } else {
          const paraError = document.createElement("p");
          paraError.innerText = "Something went wrong...";
          result = paraError;
        }
        div.append(result);
      });
  });
})();
