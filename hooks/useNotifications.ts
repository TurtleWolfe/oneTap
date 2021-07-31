import { useEffect } from "react";
// import { Notifications } from "expo";
import * as Notifications from 'expo-notifications';

// import * as Permissions from "expo-permissions";

import expoPushTokensApi from "../api/expoPushTokens";
import expoPushTokens from "../api/expoPushTokens";
import navigation from "../navigation";

export default useNotifications = (notificationListener?: (event: Notifications.NotificationResponse) => void) => {
  useEffect(() => {
    // effect
    registerForPushNotifications();

    // Notifications.addListener(notification => console.log(notification));
    // Notifications.addNotificationReceivedListener(notification => console.log(notification));
    // Notifications.addNotificationResponseReceivedListener(notification => console.log(notification));
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
    console.log(token);
    expoPushTokens.register(token);
  } catch (error) {
    console.log('error getting a push token', error);
  }
};



    // Notifications.addListener(notification => console.log(notification));
    // Notifications.addNotificationReceivedListener(notification => console.log(notification));
    // Notifications.addNotificationResponseReceivedListener(notification => console.log(notification));