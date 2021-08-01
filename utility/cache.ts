// import { AsyncStorage } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import moment from "moment";
import dayjs from "dayjs";
import logger from './logger';

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (
  key: string,
  value: any
) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    logger.log(error);
  }
};//  store

const isExpired = (item: { timestamp: string | number | Date | dayjs.Dayjs | null | undefined; }) => {
  // const now = moment(Date.now());
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, "minute") > expiryInMinutes;
};//  isExpired

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      // violation of Command Query Separation (CQS)
      // section 04 video 08 Implimenting a Cache Layer
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    // console.log(error);
    logger.log(error);
  }
};//  get

export default {
  store,
  get,
};
