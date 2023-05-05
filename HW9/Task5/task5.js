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
                  const hiddenContentEl = document.createElement("div");

                  title.innerText = `Post Number ${post.id}.) ${post.title}`;
                  para.innerText = `${post.body}`;

                  container.classList.add("post-container");
                  hiddenContentEl.classList.add("content");

                  container.append(title, para, hiddenContentEl);
                  divElPosts.append(container);
                  container.addEventListener("click", function () {
                    fetch(
                      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
                    ).then((response) => {
                      if (response.ok) {
                        const promiseComments = response.json();
                        promiseComments.then((comments) => {
                          console.log(comments);
                          hiddenContentEl.innerHTML = "";
                          hiddenContentEl.classList.toggle("content");
                          comments.forEach((comment) => {
                            const line = document.createElement("hr");
                            const emailSpan = document.createElement("span");
                            const commentBody = document.createElement("p");
                            emailSpan.innerText = `${comment.email} commented:`;
                            commentBody.innerText = `${comment.body}`;
                            hiddenContentEl.append(
                              emailSpan,
                              commentBody,
                              line
                            );
                          });
                        });
                      } else {
                        const errorEl = document.createElement("p");
                        errorEl.innerText =
                          "Something went wrong with the clicked post... We are not able to display its comments";
                        divEl.append(errorEl);
                      }
                    });
                  });
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
