/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import AuthNavigator from './AuthNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import OfflineNotice from '../components/OfflineNotice';
import LinkingConfiguration from './LinkingConfiguration';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
import AppLoading from 'expo-app-loading';
import { navigationRef } from './rootNavigation';
import logger from '../utility/logger';
logger.start();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  // logger.notify(new Error('Notify, Test error'));
  const [user, setUser] = React.useState<any>();
  const [isReady, setIsReady] = React.useState(false);

  const restoreUser = async () => {
    // If we have a user in storage, restore it.
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };
  // if not ready show loading screen
  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  // otherwise show the navigator
  // const navigationRef = React.createRef();
  // const navigation = navigationRef.current;

  return (
    <AuthContext.Provider
      value={{ user, setUser }}
    >
      <OfflineNotice />
      <NavigationContainer
        ref={navigationRef}
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {user ?
          // if user is logged in, show the RootNavigator
          <RootNavigator /> :
          // otherwise show the Welcome Screen so the user can log in
          <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
