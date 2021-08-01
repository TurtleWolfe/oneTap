import { useEffect } from "react";
// import { Notifications } from "expo";
import * as Notifications from 'expo-notifications';
import logger from '../utility/logger';
// import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";
import expoPushTokens from "../api/expoPushTokens";
import navigation from "../navigation";

export default useNotifications = (notificationListener?: (event: Notifications.NotificationResponse) => void) => {
  useEffect(() => {
    // effect
    registerForPushNotifications();

    // Notifications.addListener(notification => logger.log(notification));
    // Notifications.addNotificationReceivedListener(notification => logger.log(notification));
    // Notifications.addNotificationResponseReceivedListener(notification => logger.log(notification));
    if (notificationListener)
      Notifications.addNotificationResponseReceivedListener((notificationListener) => {
        //  navigation..
        //  you can't get there from here?! 
        // navigation.navigate('Account')
      });
    // return () => {
    //   // cleanup
    // }
  }, []);
}
const registerForPushNotifications = async () => {
  try {
    // const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    // if (!permission.granted) return;
    const token = await Notifications.getExpoPushTokenAsync();
    // logger.log(token);
    expoPushTokens.register(token);
  } catch (error) {
    logger.log(error);
  }
};



    // Notifications.addListener(notification => logger.log(notification));
    // Notifications.addNotificationReceivedListener(notification => logger.log(notification));
    // Notifications.addNotificationResponseReceivedListener(notification => logger.log(notification));