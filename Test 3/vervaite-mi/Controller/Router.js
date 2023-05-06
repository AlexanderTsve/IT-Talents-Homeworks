let router = (function () {
  class Router {
    controlHashChange() {
      let hash = location.hash.slice(1);
      const headerEl = document.querySelector("header");
      const searchFieldEl = document.querySelector(".search-el");

      if (!hash && !localStorage.getItem(ACTIVE_USER_KEY)) {
        hash = "loginPage";
      } else if (!hash && localStorage.getItem(ACTIVE_USER_KEY)) {
        location.hash = "#homePage";
        welcoming(localStorage.getItem(ACTIVE_USER_NAME));
      } else if (hash === "homePage" && localStorage.getItem(ACTIVE_USER_KEY)) {
        welcoming(localStorage.getItem(ACTIVE_USER_NAME));
      }

      if (!PAGE_IDS.includes(hash)) {
        if (localStorage.getItem(ACTIVE_USER_KEY)) {
          hash = "errorPage";
        } else {
          hash = "loginPage";
        }
      }

      if (
        PROTECTED_PAGES.includes(hash) &&
        !localStorage.getItem(ACTIVE_USER_KEY)
      ) {
        hash = "loginPage";
      }

      headerEl.style.display = PROTECTED_PAGES.includes(hash)
        ? "block"
        : "none";

      searchFieldEl.style.display = hash === "homePage" ? "block" : "none";

      PAGE_IDS.forEach((pageId) => {
        let page = document.getElementById(pageId);

        hash === pageId
          ? (page.style.display = "block")
          : (page.style.display = "none");
      });
    }
  }

  return new Router();
})();
