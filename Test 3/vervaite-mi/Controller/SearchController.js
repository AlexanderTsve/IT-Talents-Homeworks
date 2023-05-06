const searchField = document.getElementById("search-field");
function eventListening() {
  const myInit = {
    method: "GET",
    headers: {
      identity: `${localStorage.getItem(ACTIVE_USER_KEY)}`,
      partyName: `${searchField.value}`,
    },
  };
  fetch("https://itt-voting-api.herokuapp.com/parties-search", myInit).then(
    (resp) => {
      if (resp.ok) {
        const data = resp.json();
        data.then((arr) => {
          renderCards(homePage, arr);
        });
      }
    }
  );
}

let debounceTimer;

const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};
searchField.addEventListener("input", () => {
  debounce(eventListening, 500);
});
