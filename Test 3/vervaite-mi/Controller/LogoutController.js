(function () {
  const logoutBtn = document.getElementById("anchor-logout");
  logoutBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const myInit = {
      method: "POST",
      body: JSON.stringify({
        id: `${localStorage.getItem(ACTIVE_USER_KEY)}`,
      }),
      headers: { "Content-Type": "application/json" },
    };
    fetch("https://itt-voting-api.herokuapp.com/logout", myInit).then(
      (response) => {
        if (response.ok) {
          localStorage.removeItem(ACTIVE_USER_KEY);
          localStorage.removeItem(ACTIVE_USER_NAME);
          localStorage.removeItem(VOTE_FOR_PARTY);
        }
      }
    );
    location.hash = "#loginPage";
  });
})();
