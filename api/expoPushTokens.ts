import client from "./client";

const register = (pushToken: any) =>
  client.post("/expoPushTokens", { token: pushToken });

export default {
  register,
};
