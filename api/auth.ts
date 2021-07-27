import client from "./client";

const login = (
  //interface types
  email: string,
  password: string
) => client.post("/auth", {
  //Post email & password to Client API
  email,
  password
});

export default {
  login,
};
