import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import logger from '../utility/logger';

const key = "authToken";

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    // logger.log("Error getting the auth token", error);
    logger.log(error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    // logger.log("Error removing the auth token", error);
    logger.log(error);
  }
};

const storeToken = async (authToken: string) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    // logger.log("Error storing the auth token", error);
    logger.log(error);
  }
};

export default {
  getToken,
  getUser,
  removeToken,
  // setToken renamed to storeToken
  storeToken
};
