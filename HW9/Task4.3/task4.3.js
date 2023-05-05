(function () {
  const selectEl = document.querySelector("select");
  const divEl = document.getElementById("error-message");
  const divElToDos = document.getElementById("to-do");

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
            `https://jsonplaceholder.typicode.com/users/${user.id}/todos`
          ).then((response) => {
            if (response.ok) {
              const promise = response.json();
              promise.then((tasks) => {
                divElToDos.innerHTML = "";
                tasks.forEach((task) => {
                  if (!task.completed) {
                    const container = document.createElement("div");
                    const para = document.createElement("p");
                    para.innerText = `Task Number ${task.id}). ${task.title}`;
                    container.append(para);
                    divElToDos.append(container);
                  }
                });
              });
            } else {
              const errorEl = document.createElement("p");
              errorEl.innerText =
                "Something went wrong with the current user... We are not able to display his/her incomplete tasks";
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
