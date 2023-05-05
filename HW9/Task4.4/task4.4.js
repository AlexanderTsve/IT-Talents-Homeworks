(function () {
  const selectEl = document.querySelector("select");
  const divEl = document.getElementById("error-message");
  const divImgs = document.getElementById("images");

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
                divImgs.innerHTML = "";
                albums.forEach((album) => {
                  fetch(
                    `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`
                  ).then((response) => {
                    if (response.ok) {
                      const obj = response.json();
                      obj.then((images) => {
                        const para = document.createElement("p");
                        const albumCount = images.length;
                        para.innerText = `Album Title: ${album.title} - Number of photos: ${albumCount} `;
                        divImgs.append(para);
                      });
                    }
                  });
                });
              });
            } else {
              const errorEl = document.createElement("p");
              errorEl.innerText =
                "Something went wrong with the current user... We are not able to display his/her number of photos taken";
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
