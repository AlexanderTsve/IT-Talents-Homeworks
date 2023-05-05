let userManager = (function () {
  class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.cart = [];
      this.cartPage = [];
    }
  }

  class UserManager {
    constructor() {
      this.users = [];
      this.storedUsers = [];
    }

    validateCredentials(email, password) {
      this.addToStored();
      return this.storedUsers.some(
        (user) => user.email === email && user.password === password
      );
    }

    addToStored() {
      let storedUsersParsed = JSON.parse(localStorage.getItem("users"));
      this.storedUsers = [];
      storedUsersParsed.forEach((user) => this.storedUsers.push(user));
    }
    addUser(username, email, password) {
      if (!this.checkForExistingUser(username)) {
        this.users = [];
        this.users.push(new User(username, email, password));
        if (JSON.parse(localStorage.getItem("users"))) {
          this.users = [
            ...this.users,
            ...JSON.parse(localStorage.getItem("users")),
          ];
        }
        localStorage.setItem("users", JSON.stringify(this.users));
        return true;
      }
      return false;
    }

    checkForExistingUser(username) {
      if (this.users.length > 0) {
        return this.users.some((user) => user.username === username);
      }
    }
  }

  return new UserManager();
})();
