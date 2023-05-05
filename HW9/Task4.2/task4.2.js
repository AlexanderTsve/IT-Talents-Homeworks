(function () {
  const selectEl = document.querySelector("select");
  const divEl = document.getElementById("error-message");
  const divElAlbums = document.getElementById("albums");

  fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    if (response.ok) {
      const arrayOfResp = response.json();
      arrayOfResp.then((users) => {
        users.forEach((user) => {
          const optionEl = document.createElement("option");
          optionEl.innerText = `${user.email}`;
          selectEl.append(optionEl);
        });
        selectEl.addEventListener("change", function (e) {
          e.preventDefault();
          const user = users.find((el) => el.email === e.target.value);
          fetch(
            `https://jsonplaceholder.typicode.com/users/${user.id}/albums`
          ).then((response) => {
            if (response.ok) {
              const promise = response.json();
              promise.then((albums) => {
                divElAlbums.innerHTML = "";
                albums.forEach((album) => {
                  const container = document.createElement("div");
                  const para = document.createElement("p");
                  para.innerText = `Album Number ${album.id}). ${album.title}`;
                  container.append(para);
                  divElAlbums.append(container);
                });
              });
            } else {
              const errorEl = document.createElement("p");
              errorEl.innerText =
                "Something went wrong with the current user... We are not able to display his/her albums";
              divEl.append(errorEl);
            }
          });
        });
      });
    } else {
      const errorEl = document.createElement("p");
      errorEl.innerText = "Something went wrong...";
      divEl.append(errorEl);
    }
  });
})();
