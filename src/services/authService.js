//create fake database layer
export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

// SIGNUP
export const registerUser = (email, password) => {
  const users = getUsers();

  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    throw new Error("USER_EXISTS");
  }

  const newUser = {
    id: Date.now(),
    email,
    password,
  };

  users.push(newUser);
  saveUsers(users);

  return newUser;
};

// LOGIN
export const loginUser = (email, password) => {
  const users = getUsers();

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("INVALID_CREDENTIALS");
  }

  return user;
};