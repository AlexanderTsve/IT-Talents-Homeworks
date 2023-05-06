function addUser(userName, password, confirmedPassword) {
  if (userName) {
    if (password === confirmedPassword) {
      const myInit = {
        method: "POST",
        body: JSON.stringify({
          username: `${userName}`,
          password: `${password}`,
        }),
        headers: { "Content-Type": "application/json" },
      };
      return fetch("https://itt-voting-api.herokuapp.com/users", myInit);
    } else {
      throw new Error("The password has not been confirmed!");
    }
  } else {
    throw new Error("Please, enter an user name!");
  }
}

function login(userName, password) {
  const myInit = {
    method: "POST",
    body: JSON.stringify({
      username: `${userName}`,
      password: `${password}`,
    }),
    headers: { "Content-Type": "application/json" },
  };
  return fetch("https://itt-voting-api.herokuapp.com/login", myInit);
}
