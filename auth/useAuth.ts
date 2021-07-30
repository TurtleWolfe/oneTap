import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken: string) => {
    // const user = jwtDecode(result.data);
    const user = jwtDecode(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
    // AuthContext.setUser(user);
    // // console.log(user); //auth token
    // authStorage.storeToken(result.data);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return {
    user,
    // setUser,
    logIn,
    logOut
  };
};
