(function () {
  const selectEl = document.querySelector("select");
  const divEl = document.getElementById("error-message");
  const divElPosts = document.getElementById("posts");

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
            `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
          ).then((response) => {
            if (response.ok) {
              const promise = response.json();
              promise.then((posts) => {
                divElPosts.innerHTML = "";
                posts.forEach((post) => {
                  const container = document.createElement("div");
                  const title = document.createElement("h4");
                  const para = document.createElement("p");
                  title.innerText = `Post Number ${post.id}.) ${post.title}`;
                  para.innerText = `${post.body}`;
                  container.append(title, para);
                  divElPosts.append(container);
                });
              });
            } else {
              const errorEl = document.createElement("p");
              errorEl.innerText =
                "Something went wrong with the current user... We are not able to display his/her posts";
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
