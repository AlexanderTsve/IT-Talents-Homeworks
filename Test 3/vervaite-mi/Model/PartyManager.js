let partyManager = (function () {
  class PartyManager {
    allParties = [];
    getAllParties() {
      const myInit = {
        method: "GET",
        headers: { identity: `${localStorage.getItem(ACTIVE_USER_KEY)}` },
      };
      return fetch("https://itt-voting-api.herokuapp.com/parties", myInit);
    }
  }
  return new PartyManager();
})();
