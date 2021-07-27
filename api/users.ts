import client from "./client";

const register = (userInfo: any) => client.post("/users", userInfo);

export default { register };
