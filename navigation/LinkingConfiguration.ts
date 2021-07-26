/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Auth: {
        screens: {
          Welcome: {
            screens: {
              Welcome: 'welcome',
            },
          },
          Register: {
            screens: {
              Register: 'register',
            },
          },
          Login: {
            screens: {
              Login: 'login',
            },
          },
          // TabFive: {
          //   screens: {
          //     TabFiveScreen: 'five',
          //   },
          // },
        },
      },
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
          TabFour: {
            screens: {
              TabFourScreen: 'four',
            },
          },
          TabFive: {
            screens: {
              TabFiveScreen: 'five',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
